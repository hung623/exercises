new Vue({
  el: '#app',
  data: {
    location: 'tavern',
    username: 'YUN',
    playerDefense: 3,
    headDefense: 1,
    bodyDefense: 1,
    legDefense: 1,
    gamble: false,
    battle: false,
    welcome: false,
    heal: false,
    health: 200,
    gold: 3000,
    monsterHealth: 0,
    currentWeapon: {
      name: 'Bronze Scimitar',
      minDmg: 4,
      maxDmg: 8,
      image: "https://i.imgur.com/BdYYSvh.png",
    },
    weaponLvl: 0,
    weapon: [{
        name: 'Bronze Scimitar',
        minDmg: 4,
        maxDmg: 8,
        image: "https://i.imgur.com/BdYYSvh.png",
      },
      {
        name: 'Iron Scimitar',
        minDmg: 6,
        maxDmg: 10,
        image: "https://i.imgur.com/IZgnKo9.png",
      },
      {
        name: 'Mithril Scimitar',
        minDmg: 10,
        maxDmg: 14,
        image: "https://i.imgur.com/FDAb8GT.png",
      },
      {
        name: 'Dragon BattleAxe',
        minDmg: 18,
        maxDmg: 22,
        image: "https://i.imgur.com/DQpXNWA.png",
      },
      {
        name: '3rd Age Longsword',
        minDmg: 26,
        maxDmg: 34,
        image: "https://i.imgur.com/9IsGlWd.png",
      },
      {
        name: 'Ahrim\'s Staff',
        minDmg: 30,
        maxDmg: 36,
        image: "https://i.imgur.com/l6VoGZN.png",
      },
      {
        name: 'Torag\'s Hammers',
        minDmg: 36,
        maxDmg: 44,
        image: "https://i.imgur.com/QSXRzV8.png",
      },
      {
        name: 'Verac\'s Flail',
        minDmg: 49,
        maxDmg: 56,
        image: "https://i.imgur.com/LhMqO2L.png",
      },
      {
        name: 'Guthan\'s Warspear',
        minDmg: 60,
        maxDmg: 68,
        image: "https://i.imgur.com/YCWpQau.png",
      },
      {
        name: 'Dharok\'s Greataxe',
        minDmg: 68,
        maxDmg: 78,
        image: "https://i.imgur.com/3Sc2Dxt.png",
      }
    ],

    currentHelmet: {
      name: 'Bronze Full helm',
      def: 1,
      image: "https://i.imgur.com/JXvrmbU.png",
    },
    helmLvl: 0,
    helm: [{
        name: 'Bronze Full Helm',
        def: 1,
        image: "https://i.imgur.com/JXvrmbU.png",
      },
      {
        name: 'Iron full Helm',
        def: 2,
        image: "https://i.imgur.com/Sh80ZSB.png",
      },
      {
        name: 'Mithril Full Helm',
        def: 3,
        image: "https://i.imgur.com/5sY453o.png",
      },
      {
        name: 'Dragon Full Helm',
        def: 4,
        image: "https://i.imgur.com/2ZWUWrO.png",
      },
      {
        name: 'Slayer Helm',
        def: 5,
        image: "https://i.imgur.com/g3T5pHE.png",
      },
      {
        name: 'Ahrim\'s Hood',
        def: 6,
        image: "https://i.imgur.com/Zz3A4o0.png",
      },
      {
        name: 'Torag\'s Helm',
        def: 7,
        image: "https://i.imgur.com/gos7Wir.png",
      },
      {
        name: 'Verac\'s Helm',
        def: 8,
        image: "https://i.imgur.com/Jq71so4.png",
      },
      {
        name: 'Guthan\'s Helm',
        def: 9,
        image: "https://i.imgur.com/ayQPhUQ.png",
      },
      {
        name: 'Dharok\'s Helm',
        def: 10,
        image: "https://i.imgur.com/JH6iRCu.png",
      }
    ],

    currentLegs: {
      name: 'Bronze Platelegs',
      def: 1,
      image: "https://i.imgur.com/JsMwMeq.png",
    },
    legLvl: 0,
    leg: [{
        name: 'Bronze Platelegs',
        def: 1,
        image: "https://i.imgur.com/JsMwMeq.png",
      },
      {
        name: 'Iron Platelegs',
        def: 2,
        image: "https://i.imgur.com/bBDjlxR.png",
      },
      {
        name: 'Mithril Platelegs',
        def: 3,
        image: "https://i.imgur.com/NZ2qQdq.png",
      },
      {
        name: 'Dragon Platelegs',
        def: 4,
        image: "https://i.imgur.com/SIUgYZI.png",
      },
      {
        name: '3rd Age Legs',
        def: 5,
        image: "https://i.imgur.com/syDch5X.png",
      },
      {
        name: 'Ahrim\'s Robeskirt',
        def: 6,
        image: "https://i.imgur.com/1LQig6d.png",
      },
      {
        name: 'Torag\'s Platelegs',
        def: 7,
        image: "https://i.imgur.com/aNbbTDw.png",
      },
      {
        name: 'Verac\'s Plateskirt',
        def: 8,
        image: "https://i.imgur.com/smXTPCy.png",
      },
      {
        name: 'Guthan\'s Chainskirt',
        def: 9,
        image: "https://i.imgur.com/mRQmEN4.png",
      },
      {
        name: 'Dharok\'s Platelegs',
        def: 10,
        image: "https://i.imgur.com/RX1z56h.png",
      }
    ],

    currentBody: {
      name: 'Bronze Platebody',
      def: 1,
      image: "https://i.imgur.com/GCdFU8V.png",
    },
    bodyLvl: 0,
    body: [{
        name: 'Bronze Platebody',
        def: 1,
        image: "https://i.imgur.com/yqtKoxy.png",
      },
      {
        name: 'Iron Platebody',
        def: 2,
        image: "https://i.imgur.com/yqtKoxy.png",
      },
      {
        name: 'Mithril Platebody',
        def: 3,
        image: "https://i.imgur.com/1msGZpx.png",
      },
      {
        name: 'Dragon Platebody',
        def: 4,
        image: "https://i.imgur.com/tjXfdUY.png",
      },
      {
        name: '3rd Age Platebody',
        def: 5,
        image: "https://i.imgur.com/XIHjc2F.png",
      },
      {
        name: 'Ahrim\'s Robetop',
        def: 6,
        image: "https://i.imgur.com/E4V35JA.png",
      },
      {
        name: 'Torag\'s Platebody',
        def: 7,
        image: "https://i.imgur.com/wF6AjJ8.png",
      },
      {
        name: 'Verac\'s Brassard',
        def: 8,
        image: "https://i.imgur.com/Vd0KNue.png",
      },
      {
        name: 'Guthan\'s Platebody',
        def: 9,
        image: "https://i.imgur.com/6ePhcq3.png",
      },
      {
        name: 'Dharok\'s Platebody',
        def: 10,
        image: "https://i.imgur.com/ESTeyz8.png",
      }
    ],

    currentmonster: {
      monsterName: 'Wild Chicken',
      minDmg: 2,
      maxDmg: 4,
      monsterHealth: 50,
    },
    monsterLvl: 0,
    monster: [{
        monsterName: 'Wild Chicken',
        minDmg: 2,
        maxDmg: 4,
        monsterHealth: 50
      },
      {
        monsterName: 'Grizzly Bear',
        minDmg: 6,
        maxDmg: 10,
        monsterHealth: 120
      },
      {
        monsterName: 'Ent Ancient',
        minDmg: 9,
        maxDmg: 13,
        monsterHealth: 140
      },
      {
        monsterName: 'Cave Gatekeeper',
        minDmg: 11,
        maxDmg: 15,
        monsterHealth: 160,
      },
      {
        monsterName: 'Lesser Demon',
        minDmg: 14,
        maxDmg: 20,
        monsterHealth: 200,
      },
      {
        monsterName: 'Greater Demon',
        minDmg: 25,
        maxDmg: 30,
        monsterHealth: 250,
      },
      {
        monsterName: 'Hellspawn',
        minDmg: 29,
        maxDmg: 39,
        monsterHealth: 300,
      },
      {
        monsterName: 'Rare Satan Spawn',
        minDmg: 60,
        maxDmg: 60,
        monsterHealth: 600,
      }
    ],
    currentCompanion: {
      name: 'Weak Bird',
      minDmg: 0,
      maxDmg: 0,
      image: "https://i.imgur.com/yqtKoxy.png",
    },
    companionLvl: 0,
    companion: [{
        name: 'Weak Bird',
        minDmg: 0,
        maxDmg: 0,
        image: "https://i.imgur.com/yqtKoxy.png",
      },
      {
        name: 'Hermes',
        minDmg: 20,
        maxDmg: 25,
      },
      {
        name: 'Atlas',
        minDmg: 30,
        maxDmg: 30,
      },
      {
        name: 'Deries',
        minDmg: 30,
        maxDmg: 40,
      },
      {
        name: 'Dios',
        minDmg: 40,
        maxDmg: 50,
      }
    ],
  },
  methods: {
    pickedName: function() {
      if (this.username) {
        this.welcome = false
      } else {
        alert('You need to set a username');
      }
    },
    travel: function(place) {
      this.location = place;
    },
    fightingHeal: function() {
      var spiritualHeal = this.calculatespiritHeal();
      this.health += spiritualHeal
      this.monsterAttack();
      this.overHeal();
    },
    giveUp: function() {
      this.battle = false;
      this.gold -= 10;
      this.turns.unshift({
        text: this.username + ' lost ' + this.gold + ' for ' + damage + ' damage.'
      })
    },
    regularAttack: function() {
      var damage = this.calculateDamage(this.currentWeapon.minDmg, this.currentWeapon.maxDmg);
      this.monsterHealth -= damage
      this.monsterAttack();
      this.overHeal();
    },
    startHealing: function() {
      this.heal = true;
    },
    noHeal: function() {
      this.heal = false;
    },
    startGambling: function() {
      this.gamble = true;
    },
    noGamble: function() {
      this.gamble = false;
    },
    bet: function(value) {
      var result = this.calculateGambling()
      if (result <= 55) {
        this.gold -= value;
        this.checkGold
      } else
        this.gold += value;
    },
    lesserHealing: function() {
      if (this.health <= 160) {
        this.health += 40;
        this.gold -= 30
      }
    },
    startSleeping: function() {
      if (this.health <= 180) {
        this.health += 20;
        this.gold -= 15
      }
    },
    healingPotion: function() {
      if (this.health <= 120) {
        this.health += 80;
        this.gold -= 60
      }
    },
    lifeElixir: function() {
      if (this.health <= 50) {
        this.health += 150;
        this.gold -= 120
      }
    },
    startFight: function() {
      this.currentmonster = this.monster[Math.floor(Math.random() * 5 + this.monsterLvl)];
      this.monsterHealth = this.currentmonster.monsterHealth;
      this.battle = true;
      this.checkWin();
      this.overHeal();
    },
    startCave: function() {
      this.currentmonster = this.monster[Math.floor(Math.random() * 7 + this.monsterLvl)];
      this.monsterHealth = this.currentmonster.monsterHealth;
      this.battle = true;
      this.checkWin();
      this.overHeal();
    },
    monsterAttack: function() {
      var monsterDamage = this.calculatemonsterDamage(this.currentmonster.minDmg, this.currentmonster.maxDmg);
      this.health -= monsterDamage
      this.checkWin();
    },
    companionAttack: function() {
      var companionDamage = this.calculatemonsterDamage(this.currentCompanion.minDmg, this.currentCompanion.maxDmg);
      this.monsterHealth -= companionDamage
      this.checkWin();
    },
    overHeal: function() {
      if (this.health >= 200)
        this.health = 200
    },
    overDead: function() {
      if (this.health >= -1)
        this.health = 1
      this.battle = false;
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        this.battle = false;
        this.gold += 10;
      } else if (this.health <= 0) {
        this.battle = false;
        this.gold += 50;
      }
    },
    checkGold: function() {
      if (this.gold >= 0) {
        this.gamble = false;
        this.gold = 0;
      }
    },
    companionGet: function() {
      if (this.companionLvl === 5) {
        alert("You already have the strongest companion!")
      } else {
        if (this.gold >= 100) {
          this.gold -= 100;
          this.companionLvl += 1;
      } else {
        alert('You can\'t afford this');
       }
     }
   },
    legsShop: function() {
      if (this.legLvl === 9) {
        alert("You have the best leg armor")
      } else {
        if (this.gold >= 10) {
          this.gold -= 10;
          this.legLvl += 1;
          this.currentLegs = this.leg[this.legLvl];
          this.legDefense = this.leg[this.legLvl].def;
          this.playerDefense = this.legDefense + this.bodyDefense + this.headDefense;
        } else {
          alert('You can\'t afford this');
        }
      }
    },
    weaponUpgrade: function() {
      if (this.weaponLvl === 9) {
        alert("You have the best weapon")
      } else {
        if (this.gold >= 10) {
          this.gold -= 10;
          this.weaponLvl += 1;
          this.currentWeapon = this.weapon[this.weaponLvl];
        } else {
          alert('You can\'t afford this');
        }
      }
    },
    helmShop: function() {
      if (this.helmLvl === 9) {
        alert("You have the best helmet")
      } else {
        if (this.gold >= 10) {
          this.gold -= 10;
          this.helmLvl += 1;
          this.currentHelmet = this.helm[this.helmLvl];
          this.headDefense = this.helm[this.helmLvl].def;
          this.playerDefense = this.legDefense + this.bodyDefense + this.headDefense;
        } else {
          alert('You can\'t afford this');
        }
      }
    },
    bodyShop: function() {
      if (this.bodyLvl === 9) {
        alert("You have the best helmet")
      } else {
        if (this.gold >= 10) {
          this.gold -= 10;
          this.bodyLvl += 1;
          this.currentBody = this.body[this.bodyLvl];
          this.bodyDefense = this.body[this.bodyLvl].def;
          this.playerDefense = this.legDefense + this.bodyDefense + this.headDefense;
        } else {
          alert('You can\'t afford this');
        }
      }
    },
    calculateDamage: function(min, max) {
      // return Math.max(Math.floor(Math.random() * max) + 1, min);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    calculateGambling: function() {
      return Math.floor((Math.random() * 100) + 1);
    },
    calculatespiritHeal: function() {
      return Math.floor((Math.random() * 15 + 1));
    },
    calculatecompanionDamage: function() {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    calculatemonsterDamage: function(min, max) {
      // return Math.max(Math.floor(Math.random() * max) + 1, min);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
})