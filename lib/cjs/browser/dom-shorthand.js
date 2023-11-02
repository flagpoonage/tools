"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$queryAll = exports.$query = exports.$class = exports.$id = void 0;
exports.$id = document.getElementById.bind(document);
exports.$class = document.getElementsByClassName.bind(document);
exports.$query = document.querySelector.bind(document);
exports.$queryAll = document.querySelectorAll.bind(document);
