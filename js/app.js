// App vue js
const app = new Vue ({
    el: "#app",

    data: {

        // Array oggetti contatti
        contacts: [
            {
                name: "Michele",
                avatar: "img/avatar_1.svg",
                visible: true,
                online: "10/01/2020 15:50:00",
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                        readStatus: true,
                        visible: true,
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                        readStatus: true,
                        visible: true,
                    },

                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                        readStatus: true,
                        visible: true,
                    },
                ],
            },

            {
                name: "Fabio",
                avatar: "img/avatar_2.svg",
                visible: true,
                online: "20/03/2020 16:35:00",
                message: [
                    {
                        date: "20/03/2020 16:30:00",
                        text: "Ciao come stai?",
                        status: "sent",
                        readStatus: true,
                        visible: true,
                    },

                    {
                        date: "20/03/2020 16:30:55",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                        readStatus: true,
                        visible: true,
                    },

                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo anadare a fare la spesa.",
                        status: "sent",
                        readStatus: true,
                        visible: true,
                    },
                ],
            },

            {
                name: "Samuele",
                avatar: "img/avatar_3.svg",
                visible: true,
                online: "28/03/2020 10:20:10",
                message: [
                    {
                        date: "28/03/2020 10:10:40",
                        text: "La marianna va in campagna",
                        status: "received",
                        readStatus: true,
                        visible: true,
                    },

                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                        readStatus: true,
                        visible: true,
                    },

                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received",
                        readStatus: true,
                        visible: true,
                    },
                ],
            },

            {
                name: "Luisa",
                avatar: "img/avatar_4.svg",
                visible: true,
                online: "10/01/2020 15:30:55",
                message: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                        readStatus: true,
                    },

                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                        readStatus: true,
                    },
                ],
            },
        ],

        // Loading window
        loadingWindow: 0,

        // Chat corrente
        currentChat: -1,

        // Input messaggio utente
        messageUser: "",

        // Dropdown is open
        isOpen: false,

        // Dropdown add new user
        dropdownNewUser: false,

        // dropdown Search message
        dropdownSearchMessage: false,

        // Messaggio input search bar
        inputSearch: "",

        // Input search message
        inputSearchMessage: "",

        // Notifiche
        notification: true,

        // Audio message send
        audioSend: new Audio('audio/message_send.wav'),

        // Audio message received
        audioReceived: new Audio('audio/message_received.wav'),

        // Array message bot
        arrayBotMessage: [
            'Ciao',
            'Come stai?',
            'Questa chat ?? monitorata',
            'Ehi! calma',
            'Non ?? divertente',
            'Basta!!',
            'Disattiva le notifiche per disattivare il suono',
            'Bene grazie'
        ],

        // Array avatar new user
        arrayAvatar: [
            'img/avatar_5.svg',
            'img/avatar_6.svg',
            'img/avatar_7.svg',
            'img/avatar_8.svg'
        ],

        // New user
        newUser: "",
    },

    methods: {

        // Funzione che al click cambia il valore di currentChat e lo imposta uguale a index
        goToChat: function(i){
            this.currentChat = i;
        },

        // Funzione che aggiunge il messaggio scritto dall'utente all'array contacts
        newMessage: function() {

            // Se il messaggio dell'utente ?? uguale a stringa vuota, alert
            if (this.messageUser == "") {
                alert("Srivi un messaggio!!");
            } else {
                // Pusho il messaggio scritto dall'utente nell'oggetto message dell'array contacts 
                this.contacts[this.currentChat].message.push({
                    text: this.messageUser, 
                    status: "sent", 
                    date: dayjs(new Date()).format('D MMM YYYY h:mm A'),
                    readStatus: false,
                });

                // Richiamo la funzione per creare il messaggio del bot
                this.messageBot();
                
               // Audio message send if notification is true
                if(this.notification == true) {
                    this.audioSend.play();
                    this.audioSend.volume = 0.4;
                }
            }

            this.messageUser = "";
        },

        // Funzione crea messaggio bot
        messageBot: function (){

            // Indice contatto attivo
            const indexContatto = this.currentChat;

            // Dopo 1.5 secondi imposto il valore di this.contacts[indexContatto].online uguale a online
            setTimeout(() => {
                this.contacts[indexContatto].online = "Online";

                //   Dopo 2 secondi imposto il valore di this.contacts[indexContatto].online uguale a sta scrivendo
                setTimeout(() => {
                    this.contacts[indexContatto].online = "Sta scrivendo...";

                    // Imposto la propriet?? readStatus dell'ultimo messaggio inviato dall'utente uguale a true
                    this.contacts[this.currentChat].message[this.contacts[this.currentChat].message.length - 1].readStatus = true;
                }, 2000);

                // Dopo 3 secondi faccio partire la funzione per creare il messaggio di risposta
                setTimeout(() => {
                    this.contacts[indexContatto].message.push({
                        text: this.arrayBotMessage[Math.floor(Math.random() * this.arrayBotMessage.length)],
                        status: "received",
                        date: dayjs(new Date()).format('D MMM YYYY h:mm A'),
                        readStatus: true,
                    });

                    // Audio message received if notification is true
                    if (this.notification == true) {
                        this.audioReceived.play();
                        this.audioReceived.volume = 0.5;
                    }

                    // Dopo 2.5 secondi imposto this.contacts[indexContatto].online uguale a online
                    setTimeout(() => {
                        this.contacts[indexContatto].online = "Online";
                    }, 2500);

                    // Dopo 2.5 secondi imposto this.contacts[indexContatto].online uguale a online
                    setTimeout(() => {
                        this.contacts[indexContatto].online = `Ultimo accesso ${dayjs(new Date()).format('D MMM YYYY h:mm A')}`;
                    }, 3000);

                }, 3000);
                
            }, 1500);
        },

        // Funzione change dropdown more main chat toggle
        openAndCloseDropdown: function() {
            
            if (this.isOpen == false) {
                this.isOpen = true;
            } else {
                this.isOpen = false;
            }
            // console.log(this.isOpen);
        },

        // Funzione change dropdownNewUser toggle
        openDropdownNewUser: function() {
            
            if (this.dropdownNewUser == false) {
                this.dropdownNewUser = true;
            } else {
                this.dropdownNewUser = false;
            }
        },

        // Funzione change dropdownSearchMessage toggle
        openDropdownSearchMessage: function() {
            
            if (this.dropdownSearchMessage == false) {
                this.dropdownSearchMessage = true;
            } else {
                this.dropdownSearchMessage = false;
            }
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

        // Funzione cerca messaggi
        searchMessage: function() {

            for (let i = 0; i < this.contacts.length; i++) {

                for (let j = 0; j < this.contacts[i].message.length; j++) {

                    if (this.contacts[i].message[j].text.toLowerCase().includes(this.inputSearchMessage.toLowerCase())) {
                      this.contacts[i].message[j].visible = true;
                    } else {
                      this.contacts[i].message[j].visible = false;
                    }
                    
                }
            }
        },

        // Funzione elimina tutti i messaggi
        deleteAllMessage: function(i) {
            this.contacts[this.currentChat].message.splice(this.contacts[this.currentChat].message.lenght - 1);
            this.isOpen = false;
        },

        // Funzione elimina chat selezionata
        deleteChat: function() {
            this.contacts.splice(this.currentChat, 1);
            this.currentChat = -1;
            this.isOpen = false;
        },

        // Toggle notification sound true false
        toggleNotification: function() {
            this.notification = !this.notification;
        },

        // Funzione progress loading window
        incrementLoadingWindow: function() {
            
            // recupero il contenitore progress
            const divProgress = document.querySelector(".progress");

            setTimeout(() => {
                // Intervallo set interval 20 increment loadingWindow
                const intervallo = setInterval(() => {

                    // incremento loadingWindow
                    this.loadingWindow++;
    
                    // Imposto la larghezza in % al div progress uguale a loadingWindow
                    divProgress.style.width = `${this.loadingWindow}%`;
    
                    // Se loadingWindow ?? uguale a 100 stop interval increment
                    if (this.loadingWindow == 100) {
                      clearInterval(intervallo);
                    }
                }, 10);
            }, 350);

        },

        // Funzione crea nuovo utente
        addNewUser: function() {

            // Funzione genera numero random
            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min) + min);
            }

            // Se l'input newUser ?? stringa vuota
            if(this.newUser == "") {
                alert("Inserisci il nome del nuovo utente");
            } else {

                // Pusho il nuovo contatto nell'array contacts
                this.contacts.push(
                    {
                        name: this.newUser,
                        avatar: this.arrayAvatar[getRandomInt(0, this.arrayAvatar.length)],
                        visible: true,
                        online: "",
                        message: [],
                    }
                );
    
                // Svuoto l'input newUser
                this.newUser = "";

                // Imposto dropdownNewUser uguale a false
                this.dropdownNewUser = false;

                // Imposto currentChat uguale all'indice dell'ultimo contatto
                this.currentChat = this.contacts.length - 1;
            }
        }
    },

    mounted() {
        // Richiamo funzione incrementLoadingWindow
        this.incrementLoadingWindow();
    },
});