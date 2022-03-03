// App vue js
const app = new Vue ({
    el: "#app",

    data: {

        // Array oggetti contatti
        contacts: [
            {
                name: "Michele",
                avatar: "img/avatar_1.png",
                visible: true,
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                    },

                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                    },
                ],
            },

            {
                name: "Fabio",
                avatar: "img/avatar_2.png",
                visible: true,
                message: [
                    {
                        date: "20/03/2020 16:30:00",
                        text: "Ciao come stai?",
                        status: "sent",
                    },

                    {
                        date: "20/03/2020 16:30:55",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                    },

                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo anadare a fare la spesa.",
                        status: "sent",
                    },
                ],
            },

            {
                name: "Samuele",
                avatar: "img/avatar_3.png",
                visible: true,
                message: [
                    {
                        date: "28/03/2020 10:10:40",
                        text: "La marianna va in campagna",
                        status: "received",
                    },

                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                    },

                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received",
                    },
                ],
            },

            {
                name: "Luisa",
                avatar: "img/avatar_4.png",
                visible: true,
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
        ],

        // Chat corrente
        currentChat: 0,

        // Input messaggio utente
        messageUser: "",

        // Dropdown is open
        isOpen: false,

        // Messaggio input search bar
        inputSearch: "",
    },

    methods: {

        // Funzione che al click cambia il valore di currentChat e lo imposta uguale a index
        goToChat: function(i){
            this.currentChat = i;
        },

        // Funzione che aggiunge il messaggio scritto dall'utente all'array contacts
        newMessage: function() {

            // Se il messaggio dell'utente è uguale a stringa vuota, alert
            if (this.messageUser == "") {
                alert("Srivi un messaggio!!");
            } else {
                // Pusho il messaggio scritto dall'utente nell'oggetto message dell'array contacts 
                this.contacts[this.currentChat].message.push({
                    text: this.messageUser, 
                    status: "sent", 
                    date: `${new Date().getDate()}\/${new Date().getMonth() + 1}\/${new Date().getFullYear()} ${new Date().getHours()}\:${new Date().getMinutes()}\:${new Date().getSeconds()}`,
                });
                
                // Richiamo funzione messageBot
                this.messageBot();
            }

            this.messageUser = "";
        },

        // Funzione crea messaggio utente
        messageBot: function (){

            // Indice contatto attivo
            const indexContatto = this.currentChat;

            // Dopo un timeout faccio partire la mia funzione
            setTimeout(() => {
                this.contacts[indexContatto].message.push({
                    text: "ok", 
                    status: "received", 
                    date: `${new Date().getDate()}\/${new Date().getMonth() + 1}\/${new Date().getFullYear()} ${new Date().getHours()}\:${new Date().getMinutes()}\:${new Date().getSeconds()}`,
                });
            }, 1000);
        },

        openAndCloseDropdown: function() {
            
            if (this.isOpen == false) {
                this.isOpen = true;
            } else {
                this.isOpen = false;
            }
            // console.log(this.isOpen);
        },

        // Funzione elimina singolo messaggio
        deleteMessage: function(i) {
            // console.log(this.contacts[this.currentChat].message.splice());
            this.contacts[this.currentChat].message.splice(i, 1);
        },

        // Funzione trova contatto
        searchContact: function() {

            for (let i = 0; i < this.contacts.length; i++) {

                if (this.contacts[i].name.toLowerCase().includes(this.inputSearch.toLowerCase())) {
                    this.contacts[i].visible = true;
    
                } else {
                    this.contacts[i].visible = false;
                }
            }
        },

        deleteAllChat: function() {
            while(typeof (index = this.contacts[this.currentChat].message.shift()) !== "undefined" );
        },

    },
});