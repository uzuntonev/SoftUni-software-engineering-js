function solve() {

   let button = document.getElementById('send');
   button.addEventListener('click', () => {
      let inputField = document.getElementById('chat_input');
      let textField = inputField.value;
      inputField.value = '';

      let newMessage = document.createElement('div');
      newMessage.textContent = textField;

      let att = document.createAttribute("class"); 
      att.value = "message my-message";

      newMessage.setAttributeNode(att)
      let parent = document.getElementById('chat_messages');
      parent.appendChild(newMessage)
   });
}


