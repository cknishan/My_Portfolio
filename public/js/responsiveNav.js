"use strict"

// import supabase from "./supabase";

const modeBtn = document.querySelector('#btn-mode');
const nav = document.querySelector('#nav-bar');
const menuListItems = document.querySelector(".menu-content");
const menuBtn = document.querySelector(".menu-btn")
const navContent = document.querySelector(".menu-content")
const navLinks = document.querySelectorAll(".nav-link")

// Responsive Nav Bar
menuBtn.addEventListener("click", () => {
  navToggle();
})

function navToggle() {
  menuBtn.classList.toggle("active");
  navContent.classList.toggle('active')
}

navLinks.forEach(item => {
  item.addEventListener("click", () => {
    navToggle()
  })
})