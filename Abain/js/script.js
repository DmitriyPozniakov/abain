'use strict'

const nav = document.querySelector('nav');
const burger = document.querySelector('.hidden');
const hiddenList = document.querySelector('.hide');
const hiddenItems = document.querySelector('.hidden-items');
const closeButton = document.querySelector('.svg-close');

const navAnimationON = () => {
  nav.addEventListener('mouseover', function (event) {
    if (event.target.classList.contains('to-hide')) {
      const link = event.target;
      const sibling = link.closest('nav').querySelectorAll('.to-hide');
      sibling.forEach(element => element !== link ? element.style.opacity = '0.5' : null);
      sibling.forEach(element => element.style.transition = 'opacity 0.3s ease');
    }
  });
}

const navAnimationOFF = () => {
  nav.addEventListener('mouseout', function (event) {
    if (event.target.classList.contains('to-hide')) {
      const link = event.target;
      const sibling = link.closest('nav').querySelectorAll('.to-hide')
      const logo = link.closest('nav').querySelector('img');
      sibling.forEach(element => element !== link ? element.style.opacity = '1' : null);
      logo.style.opacity = '1';

      setTimeout(() => {
        sibling.forEach(element => element.style.transition = '');
      }, 300);
    }
  });
}

const observeSections = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('[data-section]');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); //прекращаем observe когда он уже виден
        }
      });
    }, {
      threshold: 0.1 // когда 10% секции видно
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
}

const closeOpenModal = () => {
  document.querySelector('.hidden').addEventListener('click', () => {
    document.querySelector('.hiddenList').classList.toggle('active');
  });
}

observeSections();
closeOpenModal();
navAnimationON();
navAnimationOFF();