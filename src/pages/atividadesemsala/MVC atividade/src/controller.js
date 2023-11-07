import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario.model.js"

let data = [];

const submitType = { NEW: 0, UPDADE: 1 }
let submitState = submitType.NEW;
let currentId = null;

const handlSubmit = (event) => {
  event.preventDefault();

  const user = new Usuario(nome.value, idade.value, login.value, senha.value)
  if (submitState == submitType.NEW) {
    addUser(user);

  } else if (submitState == submitType.UPDADE) {

    updateUser(user);
    btnsub.innerText = "NEW"

  }
  viewController.update(data, new Usuario("", null, "", ""))

}

const addUser = (newUser) => {

  data.push(newUser);
}

const updateUser = (index, uderToUpdate)=>{
  data[index] =  uderToUpdate;
}

const deletUser = (index)=>{
  data.splice(index,1)
}

const clickEsquerdo = (event) => {
  currentId = event.target.closest('tr').id.split("")[4];
  alert(`clicou com o botão esquerdo, e o ${data[currentId].getNome().toUpperCase()} será carregado para edição`)
}
const clickDireito = (event) => {
  event.preventDefault();
  if (event.button == 2) {
    currentId = event.target.closest('tr').id.split("")[4];
  alert(`clicou com o botão direito, e o ${data[currentId].getNome().toUpperCase()} será deletado`)
  }
}


const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", handlSubmit);
    const userList = document.getElementById('users-result');
    userList.addEventListener('click', clickEsquerdo);
    userList.addEventListener('contextmenu', clickDireito);
  },
};
export { controller };