document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    const todoContainer = document.getElementById('todo-container');
    console.log('Todo container:', todoContainer);
    console.log('Todo data:', todoData);

    // Generate HTML for todo items
    function generateTodoHTML() {
        console.log('Generating HTML');
        let html = '';
        
        // Generate chapters
        for (const chapterId in todoData) {
            const chapter = todoData[chapterId];
            html += `
                <div class="chapter">
                    <h2>${chapter.title}</h2>
            `;
            
            // Generate sections
            for (const sectionId in chapter.sections) {
                const section = chapter.sections[sectionId];
                html += `
                    <div class="section">
                        <h3>${section.title}</h3>
                `;
                
                // Generate items
                section.items.forEach(item => {
                    html += `
                        <div class="todo-item">
                            <input type="checkbox" id="${item.id}">
                            <div class="todo-content">
                                <label for="${item.id}">${item.text}</label>
                                <div class="todo-description">${item.description}</div>
                                ${item.subItems ? `
                                    <div class="subtodos">
                                        ${item.subItems.map(subItem => `
                                            <div class="subtodo-item">
                                                <input type="checkbox" id="${subItem.id}">
                                                <label for="${subItem.id}">${subItem.text}</label>
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `;
                });
                
                html += `</div>`;
            }
            
            html += `</div>`;
        }
        
        console.log('Generated HTML length:', html.length);
        return html;
    }

    // Render todo items
    todoContainer.innerHTML = generateTodoHTML();
    console.log('HTML rendered');

    // Handle checkbox states
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    console.log('Found checkboxes:', checkboxes.length);
    
    // Load saved states from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
        
        // Add change event listener to save state
        checkbox.addEventListener('change', (e) => {
            localStorage.setItem(e.target.id, e.target.checked);
            
            // If it's a main todo item, check if all subitems should be toggled
            const todoContent = e.target.nextElementSibling;
            if (todoContent && todoContent.classList.contains('todo-content')) {
                const subCheckboxes = todoContent.querySelectorAll('.subtodos input[type="checkbox"]');
                subCheckboxes.forEach(subCheckbox => {
                    subCheckbox.checked = e.target.checked;
                    localStorage.setItem(subCheckbox.id, e.target.checked);
                });
            }
            
            // If it's a subtodo, check if main todo should be updated
            const subtodoItem = e.target.closest('.subtodo-item');
            if (subtodoItem) {
                const mainTodo = subtodoItem.closest('.todo-item');
                const mainCheckbox = mainTodo.querySelector('input[type="checkbox"]');
                const allSubCheckboxes = mainTodo.querySelectorAll('.subtodos input[type="checkbox"]');
                const allChecked = Array.from(allSubCheckboxes).every(cb => cb.checked);
                mainCheckbox.checked = allChecked;
                localStorage.setItem(mainCheckbox.id, allChecked);
            }
        });
    });
}); 