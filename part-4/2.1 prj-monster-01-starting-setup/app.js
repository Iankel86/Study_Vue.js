// 12. отдаем на аутсорсинг урон, т.к. формула одинаковая, меняется только уровень урона.
function getRandomValue(min, max) {                         // 12.
    return Math.floor(Math.random() * (max - min)) + min;   // 12.
}

const app = Vue.createApp({     // 1.   создаем приложенеи просмотра и сохраняем в константе
    data() {                    // 3. данные создаем,в данном случем надо управлять здоровьем игрока и монстра
        return {                                        // 4.
            playerHealth: 100,                          // 5. создаем здоровье игрока с 100%
            monsterHealth: 100,                         // 6. создаем здоровье монстра с 100%
            correntRound: 0,                            // 30. текущий раунд с 0 , добавляем спец св-ва данных, которую хотим обновить
            winner: null,                               // 56. первоначальное значение нулевое, никто не выйграл, т.к. игра только началась
            logMessage: [],                             // 77. сообщение журнала - массив пустой изначально
        };
    },
    computed: {                                         // 19 - вместо 17 и 18  - вычисляемое свойство 
        monsterBarStyles () {                           // 20. Стиль панели монстров
            if (this.monsterHealth < 0) {               // 64. Делаем панель здоровья до нуля если здоровье меньше 0.
                return {width: '0%'};                   // 64. 
            }                                           // 64.
            return {width: this.monsterHealth + '%'};   // 21. вместо 17. 
        },  
        playerBarStyles  () {                           // 22. Стиль панели игрока
            if (this.playerHealth < 0) {                // 65. Делаем панель здоровья до нуля если здоровье меньше 0.
                return {width: '0%'};                   // 65. 
            }                                           // 65
            return {width: this.playerHealth + '%'};    // 21. вместо 18.
        },
        mayUseSpecialAttack() {                         // 33. новое вычесляемое св-во по спец атаке, толко каждый 3 раз можно наносить удар!
            return this.correntRound % 3 !== 0;         // 34. толко каждый 3 раз можно наносить удар!
        }

    },

    watch: {                                            // 44. СОЗДАЕМ НАБЛЮДАТЕЛЯ !!!
        playerHealth(value) {                           // 45. теперь следим за 2 св-вами Здоровья ИГРОКА
            if (value <= 0 && this.monsterHealth <= 0) {// 46. если значение (здоровье) игрока и монстра одновременно меньше или ровно 0, то будет НИЧЬЯ
               this.winner = 'draw';                    // 56. если будет ничья
            } else if (value <= 0) {                    // 47. если здоровье меньше или ровно 0 , то ИГРОК ПРОИГРАЛ
               this.winner = 'monster';                 // 57. если Игрок ПроИГРАЛ
            }    

        },                                
        monsterHealth(value) {                          // 48. теперь следим за св-вами Здоровья МОНСТРА
            if (value <= 0 && this.playerHealth <= 0) { // 49. если значение (здоровье) игрока и монстра одновременно меньше или ровно 0, то будет НИЧЬЯ
                this.winner = 'draw';                   // 58. если будет ничья    
            } else if (value <= 0) {                    // 50. если здоровье меньше или ровно 0 , то МОНСТР ПРОИГРАЛ
                this.winner = 'player';                 // 59. если Монстр ПроИГРАЛ
            }    
        }                                
                      

    },                

    methods: {                                          // 7. создаем методы, т.к. это действия в нашей игре
        startGame() {                                   // 67. Создаем новый метод по ЗАПУСКУ НОВОЙ ИГРЫ путем нажатия кнопки Start New Game !!
            this.playerHealth = 100;                    // 68. ВЕРНУТЬ здоровье игрока с 100%
            this.monsterHealth = 100;                   // 69. ВЕРНУТЬ здоровье монстра с 100%
            this.correntRound = 0;                      // 70. ВЕРНУТЬ текущий раунд с 0
            this.winner = null;                         // 71. ВЕРНУТЬ первоначальное значение нулевое, никто не выйграл, т.к. игра только началась
            this.logMessages = [];                        // 78. скидываем массив до первоначального (пустого)
        },
        attackMonster() {                               // 8. атака монстра
            this.correntRound++;                        // 31. увеличиваем раунд на 1
            const attackValue = getRandomValue(5, 12);  // 13. когда сделал function getRandomValue,  было так до этого:     Math.floor(Math.random() * (12 - 5)) + 5;  // 9. задаем рандомное число от 5-12 и потом округляем до десятичных пр ипомощи Math.floor, и потом добавляем минимальное число 5
            this.monsterHealth -=attackValue;           // 10. из здоровья монстра вычитаем полученый урон от атаки ( можно было написать длиннее:  this.monsterHealth - attackValue;)
            this.addLogMessage('player', 'attack', attackValue); // 82. Сообщение об атаке
            this.attackPlayer();                        // 15. сделали атаку игрока сразу после атаки монстра
            //if (playerHealth < 0) {  // 44. НАЧИНАЕМ создавать бой до нуля 0 - ЕСЛИ здоровье у игрока раньше станет 0 , то он ПРОИГРАЛ
            //}
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);  // 14. когда сделал function getRandomValue,  было так до этого:     Math.floor(Math.random() * (15 - 8)) + 8;  // 11. задаем рандомное число от 8-15 (т.к. монстр бьет сильнее =) ) и потом округляем до десятичных пр ипомощи Math.floor, и потом добавляем минимальное число 8
            this.playerHealth -=attackValue;            // 12. из здоровья  игрока вычитаем полученый урон от атаки ( можно было написать длиннее:  this.monsterHealth - attackValue;)
            this.addLogMessage('monster', 'attack', attackValue); // 83. Сообщение об атаке
        },
        specialAttackMonster () {                       // 25. создаем спец атаку монстра
            this.correntRound++;                        // 32. увеличиваем раунд на 1
            const attackValue = getRandomValue(10, 25); // 26.
            this.monsterHealth -=attackValue;           // 27.
            this.addLogMessage('player', 'attack', attackValue); // 84. Сообщение об атаке Игроком
            this.attackPlayer();                        // 85..................

        },
        // specialAttackPlayer () {                        // 26. создаем спец атаку игрока - не НАДО БЫЛО , т.к. есть порядок у монстра
        // },
        healPlayer() {                                  // 36. функция исцеление игрока 
            this.correntRound++;                        // 42. увеличиваем раунд на 1
            const healValue = getRandomValue(8, 20);    // 37. восстановление здоровья в границах: от 8 до 20   
            if (this.playerHealth + healValue > 100) {  // 39. проверяем кол-во здоровья игрока перед тем, как пополнить его
                this.playerHealth = 100;                // 40. и если здоровья больше, то становилось мах 100
            } else {                                    // 41. и если занчение не превышает 100 пополняем его, чтобы гарантированно не было больше 100
                this.playerHealth += healValue;         // 41.
            }
            this.addLogMessage('player', 'heal', healValue); // 85. Игрок исцеляет себя
            this.attackPlayer();                        // 43. как только мы залечимся, монстр сделает атаку, тк. ходы должны быть поочередны
                
            // this.playerHealth += healValue;          // 38. т.к. потом переиграли
        }, 
        surrender() {                                  // 73. Создаем метод СДАТЬСЯ !!!  
            this.winner = 'monster';                    // 74. если нажать , то победитель Монстр !
        },
        addLogMessage(who, what, value) {               // 76. Добавляем метод - ЖУРНАЛ, метод должен принимать 3 параметра - 1) информаци о том, кто что сделал, 2) что  3) какой ущерб был нанесен?      
            this.logMessages.unshift({                   // 79. unshift ждобавляет в начало списка сообщения, а не в конец.
                actionBy: who,                          // 80. Кто
                actionType: what,                       // 81. Что
                actionValue: value                     // 82. Значение
            });                 
        }
    },
});


app.mount('#game')          // 2.  монтируем приложение в этом игровом разделе