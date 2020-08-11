<template>
  <div class="container">
    <div class="col-sm-10">
      <h1>Задачи</h1>

      <confirmation :variant="confirmation_variant"
                    :message="message"
                    :showConfirmation="showConfirmation"
                    v-if="showConfirmation">
      </confirmation>

      <button type="button"
              id="task-add"
              class="btn btn-success btn-sm align-left d-block"
              v-b-modal.todo-edit-modal
              @click="resetForm()">
        Добавить задачу
      </button>

      <div>Выполнено: {{ count_on }},&nbsp;&nbsp;Не выполнено: {{ count_off }}</div>
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
import Confirmation from './Confirmation.vue';

const localStorageDataName = 'data';

function getData() {
  const data = window.localStorage.getItem(localStorageDataName);
  if (data === null) {
    return {};
  }
  return JSON.parse(data);
}

function setData(data) {
  window.localStorage.setItem(localStorageDataName, JSON.stringify(data));
}

function addRec(editTodoForm) {
  const rec = editTodoForm;
  const data = getData();
  const values = Object.values(data);
  rec.uid = values.length === 0 ? 1 : (Math.max(...values.map((v) => v.uid)) + 1);
  data[rec.uid] = rec;
  setData(data);
  return {
    rec,
    confirmation_variant: 'success',
    message: `Задача с uid=${editTodoForm.uid} добавлена`,
  };
}

function updRec(editTodoForm) {
  const data = getData();
  if (editTodoForm.uid in data) {
    data[editTodoForm.uid] = editTodoForm;
    setData(data);
    return {
      confirmation_variant: 'success',
      message: `Задача с uid=${editTodoForm.uid} обновлена`,
    };
  }
  return {
    confirmation_variant: 'danger',
    message: `Отсутствует uid=${editTodoForm.uid}`,
  };
}

function delRec(editTodoForm) {
  const data = getData();
  if (editTodoForm.uid in data) {
    delete data[editTodoForm.uid];
    setData(data);
    return {
      confirmation_variant: 'success',
      message: `Задача с uid=${editTodoForm.uid} удалена`,
    };
  }
  return {
    confirmation_variant: 'danger',
    message: `Отсутствует uid=${editTodoForm.uid}`,
  };
}
/*
function getRec(editTodoForm) {
  const data = getData();
  if (editTodoForm.uid in data) {
    return {
      rec: data[editTodoForm.uid],
      confirmation_variant: 'success',
      message: `Задача с uid=${editTodoForm.uid} удалена`,
    };
  }
  return {
    confirmation_variant: 'danger',
    message: `Отсутствует uid=${editTodoForm.uid}`,
  }
}
*/
function getLst() {
  return Object.values(getData());
}

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
      count_on: 0,
      count_off: 0,
    };
  },
  methods: {
    getTodos() {
      this.todos = getLst();
      this.count_on = this.todos.reduce((accum, todo) => accum + (todo.is_completed ? 1 : 0), 0);
      this.count_off = this.todos.length - this.count_on;
    },
    resetForm() {
      this.editTodoForm.description = '';
      this.editTodoForm.is_completed = [];
      this.editType = '';
    },
    onSubmit(event) {
      event.preventDefault();
      const requestData = {
        uid: this.editTodoForm.uid,
        description: this.editTodoForm.description,
        is_completed: this.editTodoForm.is_completed.length > 0,
      };
      if (this.editType === 'upd') {
        const res = updRec(requestData);
        this.confirmation_variant = res.confirmation_variant;
        this.message = res.message;
      } else {
        const res = addRec(requestData);
        this.confirmation_variant = res.confirmation_variant;
        this.message = res.message;
      }
      this.getTodos();
      this.showConfirmation = true;
      this.$refs.editTodoModal.hide();
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
      const res = delRec(todo);
      this.confirmation_variant = res.confirmation_variant;
      this.message = res.message;
      this.getTodos();
      this.showConfirmation = true;
      this.$refs.editTodoModal.hide();
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
