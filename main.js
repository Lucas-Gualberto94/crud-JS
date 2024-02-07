const crudForm = document.getElementById('crudForm');
const recordList = document.getElementById('recordList');
const records = [];

// Função para adicionar um novo registro
const addRecord = (name, age) => {
    const record = { name, age };
    records.push(record);
    displayRecords();
};

// Função para exibir os registros na lista
const displayRecords = () => {
    recordList.innerHTML = '';

    const titleElement = document.createElement('h2');
    titleElement.innerText = "Lista de registros cadastrados";
    recordList.appendChild(titleElement);
    
    records.forEach((record, index) =>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `${record.name}, ${record.age} anos, 
        <button onclick="editRecord(${index})">Editar</button>
        <button onclick="deleteRecord(${index})">Excluir</button>`
        recordList.appendChild(listItem);
    });
};

// Função para editar registro
const editRecord = (index) => {
    const newName = prompt('Novo nome:');
    const newAge = prompt('Nova idade:');
    records[index].name = newName;
    records[index].age = newAge;
    displayRecords();
}

// função para excluir registro
const deleteRecord = (index) => {
    const confirmDelete = confirm('Tem certeza que deseja excluir esse registro?');
    if (confirmDelete){
        records.splice(index, 1);
        displayRecords();
    }
};

// Evento de envio do formulário
crudForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = crudForm.elements['name'].value;
    const age = crudForm.elements['age'].value;

    addRecord(name, age);

    crudForm.reset();
});
