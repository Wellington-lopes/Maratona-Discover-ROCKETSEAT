const Modal = {
     open(){
         // abrir modal
         // adicionar a class active no modal
         document
             .querySelector('.modal-overlay')
             .classList
             .add('active')
     },
     close(){
         // fechar o modal
         // remover a classe active do modal
         document
             .querySelector('.modal-overlay')
             .classList
             .remove('active')
     }
 }

