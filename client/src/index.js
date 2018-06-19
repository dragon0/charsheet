Vue.component('spell', {
    props: ['spell', 'fromBook', 'onLearn', 'onPrepare', 'onRemove'],
    data: function(){
        return {};
    },
    methods: {
        learn: function(){
            this.onLearn(this.spell);
        },
        prepare: function(){
            this.onPrepare(this.spell);
        },
        remove: function(){
            this.onRemove(this.spell);
        }

    },
    template: "#spell-template"
});

Vue.component('known-spells', {
    props: ['spells', 'onRemove'],
    data: function(){
        return {};
    },
    methods: {
        remove: function(spell){
            this.onRemove(spell);
        }
    },
    template: "#known-spells-template"
});

Vue.component('prepared-spells', {
    props: ['spells', 'onRemove'],
    data: function(){
        return {};
    },
    methods: {
        remove: function(spell){
            this.onRemove(spell);
        }
    },
    template: "#prepared-spells-template"
});

Vue.component('spellbook', {
    props: ['spells', 'onLearn', 'onPrepare'],
    data: function(){
        return {};
    },
    methods: {
        learn: function(spell){
            this.onLearn(spell);
        },
        prepare: function(spell){
            this.onPrepare(spell);
        }
    },
    template: "#spellbook-template"
});

new Vue({
    el: "#app",
    data: {
        spellBook: spells,
        knownSpells: [],
        preparedSpells: []
    },
    methods: {
        learn: function(spell){
            if(!this.knownSpells.some((s) => s.name === spell.name)){
                this.insert(this.knownSpells, spell);
            }
        },
        unLearn: function(spell){
            this.knownSpells = this.remove(this.knownSpells, spell);
        },
        prepare: function(spell){
            if(!this.preparedSpells.some((s) => s.name === spell.name)){
                this.insert(this.preparedSpells, spell);
            }
        },
        unPrepare: function(spell){
            this.preparedSpells = this.remove(this.preparedSpells, spell);
        },
        remove: function(array, item){
            return array.filter((s) => s.name !== item.name);
        },
        insert: function(array, item) {
                array.push(item);
                array.sort(function(a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });

        }
    }
});

