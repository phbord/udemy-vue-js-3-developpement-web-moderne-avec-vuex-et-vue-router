members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {} //créer l'objet pour recevoir les données des champs
        }
    },
    methods: {
        addMember: function() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                this.members.push(this.newMember); //ajout d'un nouveau champ
                this.newMember = {}; //vider les champs
            } else {
                alert("All fields must be filled");
            }
        },
    }

};

Vue.createApp(handlingForms).mount('#app');
