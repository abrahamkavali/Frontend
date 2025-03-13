const works = {
  "task1": { "title": "Project 1", "url": "works/task1/index.html" },
  "task2": { "title": "Project 2", "url": "works/task2/index.html" },
  "task3": { "title": "Project 3", "url": "works/task3/index.html" },
  "task4": { "title": "Project 4", "url": "works/task1/index.html" },
  "task5": { "title": "Project 5", "url": "works/task2/index.html" },
  "task6": { "title": "Project 6", "url": "works/task3/index.html" },
  "task7": { "title": "Project 7", "url": "works/task3/index.html" }
};

function changeTask(projectUrl) {
  const taskFrame = document.getElementById("taskFrame");
  taskFrame.src = projectUrl;
}

function generateButtons() {
  const gallery = document.querySelector('.gallery');

  for (const task in works) {
      const project = works[task];
      
      let button = document.createElement('button');
      button.textContent = project.title;
      button.onclick = () => changeTask(project.url);
      gallery.appendChild(button);
  }
}

window.onload = generateButtons;