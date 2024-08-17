document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // إيقاف الإجراء الافتراضي للنموذج

    const taskDescription = document.getElementById('new-task-description').value;
    
    if (taskDescription.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = taskDescription;
      taskList.appendChild(li);

      form.reset(); // إعادة تعيين النموذج بعد إضافة المهمة
    }
  });
});
