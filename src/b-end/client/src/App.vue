<template>
  <div>
    <!-- Section 1 -->
    <section class="relative w-full px-8 text-gray-700 bg-white body-font">
      <div
        class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"
      >
        <a
          href="#_"
          class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
          >ToDo VueJS v2</a
        >

        <div
          class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end"
        >
          <a
            href="#"
            v-if="isLoggedIn"
            v-on:click="logoutButtonHandler"
            class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
          >
            Hello, {{ username }}
          </a>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="w-full px-8 py-16 bg-gray-100 xl:px-8" v-if="!isLoggedIn">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">
          <div class="w-full mt-16 md:mt-0 md:w-5/5">
            <div
              class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
            >
              <img
                class="mx-auto mb-8 rounded-full"
                v-bind:src="imageSource.url"
                :alt="imageSource.alt"
              />
              <h3 class="mb-6 text-2xl font-medium text-center">Identity</h3>
              <input
                type="text"
                name="user-name"
                v-model="username"
                class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Your Name"
              />
              <input
                type="password"
                name="user-password"
                v-model="password"
                class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Your Password"
              />
              <div class="block">
                <button
                  class="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  v-on:click="letsGoButtonHandler"
                >
                  Let's Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="w-full px-8 py-16 bg-gray-100 xl:px-8" v-if="isLoggedIn">
      <form action="#" v-on:submit.prevent="addFormSubmitHandler">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-col items-center md:flex-row">
            <div class="w-full mt-16 md:mt-0 md:w-5/5">
              <div
                class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
              >
                <h3 class="mb-6 text-2xl font-medium text-center">Add ToDo</h3>
                <input
                  type="text"
                  name="todo-name"
                  v-model="todo.name"
                  class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="ToDo Job"
                />
                <input
                  type="text"
                  name="todo-desc"
                  v-model="todo.description"
                  class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  placeholder="ToDo Description"
                />

                <select
                  name="todo-priority"
                  v-model="todo.priority"
                  class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                >
                  <option selected disabled hidden></option>
                  <option value="Low">Low</option>
                  <option value="Critical">Critical</option>
                  <option value="Highest">Highest</option>
                </select>

                <div class="block">
                  <button
                    type="submit"
                    class="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>

    <!-- Section 4 -->
    <section
      class="relative py-16 bg-white min-w-screen animation-fade animation-delay"
      v-show="isLoggedIn"
    >
      <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
        <p
          class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold"
        >
          See Your ToDo Here
        </p>
        <h3
          class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0"
        >
          ToDo List
        </h3>

        <div
          class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 text-center"
        >
          <div>
            <h3>Filter Type</h3>
          </div>

          <div>
            <label class="inline-flex items-center">
              <input
                type="radio"
                class="form-radio"
                name="todoFilter"
                value="all"
                v-model="todosFilter"
              />
              <span class="ml-2">All</span>
            </label>

            <label class="inline-flex items-center ml-6">
              <input
                type="radio"
                class="form-radio"
                name="todoFilter"
                value="finished"
                v-model="todosFilter"
              />
              <span class="ml-2">Finished</span>
            </label>

            <label class="inline-flex items-center ml-6">
              <input
                type="radio"
                class="form-radio"
                name="todoFilter"
                value="unfinished"
                v-model="todosFilter"
              />
              <span class="ml-2">Unfinished</span>
            </label>
          </div>
        </div>

        <div
          v-if="todosComputed.length <= 0"
          class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3 text-center"
        >
          It's Empty
        </div>

        <!-- List of ToDo Here -->
        <div v-if="todosComputed.length > 0">
          <div
            v-for="todo in todosComputed"
            v-bind:key="todo.id"
            class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
          >
            <h3
              class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl"
            >
              {{ todo.name }}
            </h3>

            <div class="flex flex-wrap">
              <div class="w-full md:w-3/4 px-4 mb-4 md:mb-0">
                <p
                  class="mt-2 mr-2 text-base text-gray-600 sm:text-normal md:text-sm inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold"
                >
                  {{ todo.priority }}
                </p>
                <p
                  class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal"
                >
                  {{ todo.description }}
                </p>
              </div>
              <div class="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                <div>
                  <button
                    class="w-full px-3 py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                    @click="finishTodoButtonHandler(todo.id)"
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5 - Footer -->
    <section class="text-gray-700 bg-white body-font">
      <div
        class="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row"
      >
        <!-- Left Side -->
        <a
          href="#_"
          class="text-xl font-black leading-none text-gray-900 select-none logo"
          >ToDo VueJS v2</a
        >

        <!-- Right Side -->
        <span
          class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
        >
          <p
            class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0"
          >
            © Tailwindcss Page Builder x withered-flowers
          </p>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
// Lakukan import axios di sini
import axios from "axios";
// Lakukan import sweetalert di sini
import Swal from "sweetalert2";

export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
      username: "",
      password: "",
      todo: {
        name: "",
        description: "",
        priority: "",
        is_done: false,
      },
      todos: [],
      todosFilter: "all",
      imageSource: {
        url: "https://placekitten.com/80/80",
        alt: "Placeholder 80x80",
      },
    };
  },
  methods: {
    letsGoButtonHandler: function () {
      axios
        .get("http://localhost:3000/users")
        .then((response) => {
          let users = response.data;
          let isFound = false;

          users.forEach((e) => {
            if (e.email === this.username && e.password === this.password) {
              isFound = true;
              this.isLoggedIn = true;

              localStorage.setItem("access_token", e.access_token);
              localStorage.setItem("username", e.email);
            }
          });

          if (!isFound) {
            Swal.fire({
              title: "Error !",
              text: "Not Found",
              icon: "error",
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error !",
            text: "Something wicked happened !",
            icon: "error",
          });
        });
    },
    logoutButtonHandler: function () {
      this.isLoggedIn = false;
      this.username = "";
      this.password = "";

      localStorage.clear();
    },
    addFormSubmitHandler: function () {
      let temp = {};

      axios
        .post("http://localhost:3000/todos", this.todo)
        .then((response) => {
          return axios.get("http://localhost:3000/todos");
        })
        .then((response) => {
          this.todos = response.data;

          this.todo.name = "";
          this.todo.description = "";
          this.todo.priority = "";
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: "Cannot add todo",
            icon: "error",
          });
        });
    },
    finishTodoButtonHandler: function (id) {
      axios
        .delete(`http://localhost:3000/todos/${+id}`)
        .then((response) => {
          this.todos = this.todos.filter((e) => e.id !== +id);
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: "Cannot delete selected todo",
            icon: "error",
          });
        });
    },
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLoggedIn = true;
      this.username = localStorage.getItem("username");
    }

    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        this.todos = response.data;
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something wicked happened",
          icon: "error",
        });
      });
  },
  computed: {
    todosComputed: function () {
      return this.todos.filter((todo) => {
        if (this.todosFilter === "all") {
          return todo;
        } else if (this.todosFilter === "finished") {
          return todo.is_done === true;
        } else {
          return todo.is_done === false;
        }
      });
    },
  },
};
</script>

<style></style>
