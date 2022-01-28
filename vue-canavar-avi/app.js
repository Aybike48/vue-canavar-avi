new Vue ({
    el : "#app",
    data:{
        player_heal:100,
        monster_heal:100,
        game_is_on: false,

    },
    methods:{
        start_game : function(){
            this.game_is_on = true;
            this.player_heal=100;
            this.monster_heal=100;

        },
        attack : function(){
            var point = Math.ceil(Math.random()* 10);
            this.monster_heal-=point;
            this.monster_attack();
            console.log(monster_heal,player_heal);

        },
        special_attack : function(){
            var point = Math.ceil(Math.random()* 25);
            this.monster_heal-=point;
            this.monster_attack();

        },
        heal_up : function(){
            var point = Math.ceil(Math.random()* 10);
            this.player_heal+=point;
            this.monster_attack();

        },
        give_up : function(){
            this.player_heal=0;

        },
        monster_attack : function(){
            var point = Math.ceil(Math.random()* 10);
            this.player_heal-=point;
        },

    },
    watch : {
        player_heal : function(value){
            if (value<=0)  {
                this.player_heal=0;
                if(confirm("kaybettin. tekrar?")){
                    this.player_heal=100;
                    this.monster_heal=100;
                }
                
            } else if(value>=100){
                this.player_heal=100;

            } else{
                this.player_heal=this.player_heal;
            }

        },monster_heal : function(value){
            if (value<=0)  {
                this.monster_heal=0;
                if(confirm("kazandın. tekrar?")){
                    this.player_heal=100;
                    this.monster_heal=100;
                }
                
            } else if(value>=100){
                this.monster_heal=100;

            } else{
                this.monster_heal=this.monster_heal;
            }

        }
    }















})