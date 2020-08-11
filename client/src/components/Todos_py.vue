<template>
  <div class="container">
    <div class="col-sm-10">
      <h1>Задачи</h1>

      <confirmation :variant="confirmation_variant"
                    :message="message"
                    v-if="showConfirmation">
      </confirmation>

      <button type="button"
              id="task-add"
              class="btn btn-success btn-sm align-left d-block"
              v-b-modal.todo-edit-modal>
        Добавить задачу
      </button>

      <table class="table table-dark table-stripped table-hover">
        <thead class="thead-light">
          <tr>
            <th>Uid</th>
            <th>Описание</th>
            <th>Выполнена?</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(todo, index) in todos" :key="index">
            <td class="todo-uid">{{ todo.uid }}</td>
            <td>{{ todo.description }}</td>
            <td>
              <span v-if="todo.is_completed">Выполнено</span>
              <span v-else>Не выполнено</span>
            </td>
            <td>
              <div class="btn-group" role="group">
                <button type="button"
                        class="btn btn-secondary btn-sm"
                        v-b-modal.todo-edit-modal
                        @click="updateTodo(todo)">
                  Обновить
                </button>
                &nbsp;
                <button type="button" class="btn btn-danger btn-sm" @click="deleteTodo(todo)">
                  X
                </button>
              </div>
            </td>
          </tr>
        </tbody>

      </table>

      <b-modal ref="editTodoModal"
               id="todo-edit-modal"
               :title="(this.editType == 'upd') ? 'Изменение' : 'Добавление'"
               @hide="onHide"
               hide-footer>
        <b-form @submit="onSubmit" @reset="onReset" class="w-100">
        <b-form-group id="form-description-group"
                      label="Описание:"
                      label-for="form-description-input">
          <b-form-input id="form-description-input"
                        type="text"
                        v-model="editTodoForm.description"
                        required>
          </b-form-input>
        </b-form-group>
        <b-form-group id="form-complete-group">
          <b-form-checkbox-group v-model="editTodoForm.is_completed" id="form-checks">
            <b-form-checkbox value="true">Задача выполнена?</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button-group>
          <b-button type="submit" variant="primary">Обновить</b-button>
          <b-button type="reset" variant="danger">Сброс</b-button>
        </b-button-group>
        </b-form>
      </b-modal>

    </div>
  </div>
</template>

<style>
button#task-add {
  margin-top: 20px;
  margin-bottom: 20px;
}
h1, td {
  text-align: left;
}
.todo-uid {
  text-align: right;
}
</style>

<script>
import axios from 'axios';
import Confirmation from './Confirmation.vue';

const dataURL = 'http://localhost:5000/api/tasks/';

export default {
  name: 'Todo',
  data() {
    return {
      todos: [],
      editTodoForm: {
        uid: 0,
        description: '',
        is_completed: [],
      },
      message: '',
      confirmation_variant: '',
      showConfirmation: false,
      editType: '',
    };
  },
  methods: {
    getTodos() {
      axios.get(dataURL)
        .then((response) => {
          this.todos = response.data.tasks;
        })
        .catch((error) => {
          console.log('get error!');
          console.log(error);
        });
    },
    resetForm() {
      this.editTodoForm.description = '';
      this.editTodoForm.is_completed = [];
      this.editType = '';
    },
    onSubmit(event) {
      event.preventDefault();
      const requestData = {
        description: this.editTodoForm.description,
        is_completed: this.editTodoForm.is_completed.length > 0,
      };
      if (this.editType === 'upd') {
        // update
        const todoURL = dataURL + this.editTodoForm.uid;
        axios.put(todoURL, requestData)
          .then(() => {
            this.getTodos();
            this.confirmation_variant = 'success';
            this.message = 'Задача обновлена';
          })
          .catch((error) => {
            console.log('put error!');
            console.log(error);
            this.confirmation_variant = 'danger';
            this.message = error;
          })
          .finally(() => {
            this.showConfirmation = true;
            this.$refs.editTodoModal.hide();
          });
      } else {
        // insert
        axios.post(dataURL, requestData)
          .then(() => {
            this.getTodos();
            this.confirmation_variant = 'success';
            this.message = `Задача "${requestData.description}" добавлена`;
          })
          .catch((error) => {
            console.log('post error!');
            console.log(error);
            this.confirmation_variant = 'danger';
            this.message = error;
          })
          .finally(() => {
            this.showConfirmation = true;
            this.$refs.editTodoModal.hide();
          });
      }
    },
    onHide() {
      this.resetForm();
    },
    onReset(event) {
      event.preventDefault();
      this.$refs.editTodoModal.hide();
    },
    updateTodo(todo) {
      this.editType = 'upd';
      this.editTodoForm.uid = todo.uid;
      this.editTodoForm.description = todo.description;
      if (todo.is_completed) {
        this.editTodoForm.is_completed = [true];
      }
    },
    deleteTodo(todo) {
      const todoURL = dataURL + todo.uid;
      axios.delete(todoURL)
        .then(() => {
          this.getTodos();
          this.confirmation_variant = 'success';
          this.message = 'Задача удалена из списка';
        })
        .catch((error) => {
          console.log('get error!');
          console.log(error);
          this.confirmation_variant = 'danger';
          this.message = error;
        })
        .finally(() => {
          this.showConfirmation = true;
          this.$refs.editTodoModal.hide();
        });
    },
  },
  created() {
    this.getTodos();
  },
  components: {
    confirmation: Confirmation,
  },
};
</script>
