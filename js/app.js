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
    },

    methods: {

        // Funzione che al click cambia il valore di currentChat e lo imposta uguale a index
        goToChat: function(i){
            this.currentChat = i;
        },

    },

});