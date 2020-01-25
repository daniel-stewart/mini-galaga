namespace SpriteKind {
    export const Bomb = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(-1)
})
function setUpEnemies (num: number, row: number, _type: number) {
    numEnemies = num
    if (num > 8) {
        numEnemies = 8
    }
    if (_type == 0) {
        for (let index = 0; index <= numEnemies - 1; index++) {
            pos = numEnemies * row + index
            EnemyList[pos] = sprites.create(img`
. . . . . . 7 . 7 . . . . . . . 
. . . . . . 7 . 7 . . . . . . . 
. . . 7 7 2 2 7 2 2 7 7 . . . . 
. . . . 7 2 2 7 2 2 7 . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . 7 5 5 7 5 5 7 . . . . . 
. . 7 7 7 5 5 5 5 5 7 7 7 . . . 
7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 . 
. 7 7 7 7 5 5 5 5 5 7 7 7 7 . . 
. 7 2 7 7 . 2 . 2 . 7 7 2 7 . . 
7 7 2 7 . . 2 . 2 . . 7 2 7 7 . 
7 2 7 7 . . . . . . . 7 7 2 7 . 
7 2 2 7 . . . . . . . 7 2 2 7 . 
7 2 2 7 . . . . . . . 7 2 2 7 . 
7 7 7 7 . . . . . . . 7 7 7 7 . 
. 7 7 . . . . . . . . . 7 7 . . 
`, SpriteKind.Enemy)
            EnemyList[pos].setPosition(scene.screenWidth() / (numEnemies + 1) * (index + 1), 20 * (1 + row))
            EnemyList[pos].setVelocity(2, 0)
            EnemyList[pos].setFlag(SpriteFlag.StayInScreen, true)
        }
    } else if (_type == 1) {
        for (let index2 = 0; index2 <= numEnemies - 1; index2++) {
            pos = numEnemies * row + index2
            EnemyList[pos] = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 8 8 . . . 5 . . . 8 8 . . . . 
. . 8 8 5 2 5 2 5 8 8 . . . . . 
. . . 8 2 2 5 2 2 8 . . . . . . 
. . . . 5 5 5 5 5 . . . . . . . 
. . . . 8 5 5 5 8 . . . . . . . 
. . 8 8 8 2 2 2 8 8 8 . . . . . 
. 8 8 8 . 2 2 2 . 8 8 8 . . . . 
8 8 8 8 . 5 5 5 . 8 8 8 8 . . . 
8 8 8 . . 2 2 2 . 8 8 8 8 . . . 
8 8 8 . . . 2 . . 8 8 8 8 . . . 
`, SpriteKind.Enemy)
            EnemyList[pos].setPosition(scene.screenWidth() / (numEnemies + 1) * (index2 + 1), 20 * (1 + row))
            EnemyList[pos].setVelocity(2, 0)
            EnemyList[pos].setFlag(SpriteFlag.StayInScreen, true)
        }
    } else if (_type == 2) {
        for (let index3 = 0; index3 <= numEnemies - 1; index3++) {
            pos = numEnemies * row + index3
            EnemyList[pos] = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d . . . d . . . . . . 
. . . . d d . . . d d . . . . . 
. . . . d . . . . . d . . . . . 
. . . . d . . 1 . . d . . . . . 
. . . . d . 1 . 1 . d . . . . . 
. d . . d 1 . . . 1 d . . d . . 
. 6 6 6 d 1 . . . 1 d 6 6 6 . . 
. d . . d . 1 1 1 . d . . d . . 
. 6 6 6 6 . . . . . 6 6 6 6 . . 
. . . . d . . . . . d . . . . . 
. . . . d . . . . . d . . . . . 
. . . . d d d d d d d . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
            EnemyList[pos].setPosition(scene.screenWidth() / (numEnemies + 1) * (index3 + 1), 20 * (1 + row))
            EnemyList[pos].setVelocity(2, 0)
            EnemyList[pos].setFlag(SpriteFlag.StayInScreen, true)
        }
    } else {
        for (let index4 = 0; index4 <= numEnemies - 1; index4++) {
            pos = numEnemies * row + index4
            EnemyList[pos] = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . 8 . 8 . . . . 2 . . . 
2 2 2 . . 8 . 8 . . 2 2 2 . . . 
2 2 2 . 3 2 3 2 3 . 2 2 2 . . . 
2 2 2 . 3 3 3 3 3 . 2 2 2 . . . 
. 2 2 2 2 3 3 3 2 2 2 2 . . . . 
. . 2 2 2 8 8 8 2 2 2 . . . . . 
. 2 2 2 2 8 8 8 2 2 2 2 . . . . 
2 2 2 2 . 3 3 3 2 2 2 2 2 . . . 
. 2 2 2 . 8 8 8 . 2 2 2 . . . . 
. . . 2 . . . . . 2 . . . . . . 
`, SpriteKind.Enemy)
            EnemyList[pos].setPosition(scene.screenWidth() / (numEnemies + 1) * (index4 + 1), 20 * (1 + row))
            EnemyList[pos].setVelocity(2, 0)
            EnemyList[pos].setFlag(SpriteFlag.StayInScreen, true)
        }
    }
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.changeLifeBy(-1)
    bomb.destroy()
    if (info.life() != 0) {
        ship = sprites.create(img`
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . 2 . . 1 1 1 . . 2 . . . . 
. . . 2 . . 1 1 1 . . 2 . . . . 
. . . 1 . 1 1 1 1 1 . 1 . . . . 
2 . . 1 8 1 1 2 1 1 8 1 . . 2 . 
2 . . 8 1 1 2 2 2 1 1 8 . . 2 . 
1 . . 1 1 1 2 . 2 1 1 1 . . 1 . 
1 . 1 1 1 1 1 1 1 1 1 1 1 . 1 . 
1 1 1 1 1 2 1 1 1 2 1 1 1 1 1 . 
1 1 1 . 2 2 1 1 1 2 2 . 1 1 1 . 
1 1 . . 2 2 . 1 . 2 2 . . 1 1 . 
1 . . . . . . 1 . . . . . . 1 . 
`, SpriteKind.Player)
        ship.setPosition(80, 112)
        controller.moveSprite(ship, 100, 0)
        ship.setFlag(SpriteFlag.StayInScreen, true)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("num enemies: " + EnemyList.length)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    numMissiles += 1
})
sprites.onOverlap(SpriteKind.Bomb, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
    info.changeScoreBy(10)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numMissiles > 0) {
        projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . 2 5 2 . . . . . . 
`, ship, 0, -60)
        numMissiles += -1
    }
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    mySprite2 = EnemyList.removeAt(EnemyList.indexOf(sprite))
    if (EnemyList.length == 0) {
        sceneNumber += 1
        if (sceneNumber == 5) {
            game.over(true, effects.confetti)
        }
        sprite_list = sprites.allOfKind(SpriteKind.Bomb)
        game.splash("Level Complete!!")
        for (let value of sprite_list) {
            value.destroy()
        }
        sprite_list = sprites.allOfKind(SpriteKind.Projectile)
        for (let value2 of sprite_list) {
            value2.destroy()
        }
        setupScene(sceneNumber)
        levelComplete = 1
        changeRow = 0
        changeVelocity = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fountain, 500)
    game.over(false)
})
function setupScene (num: number) {
    if (num == 0) {
        setUpEnemies(3, 0, 0)
        setUpEnemies(3, 1, 0)
        setUpEnemies(3, 2, 0)
    } else if (num == 1) {
        setUpEnemies(4, 0, 0)
        setUpEnemies(4, 1, 1)
        setUpEnemies(4, 2, 0)
    } else if (num == 2) {
        setUpEnemies(5, 0, 0)
        setUpEnemies(5, 1, 1)
        setUpEnemies(5, 2, 2)
        gameUpdateTime = 1500
    } else if (num == 3) {
        setUpEnemies(6, 0, 0)
        setUpEnemies(6, 1, 1)
        setUpEnemies(6, 2, 2)
        setUpEnemies(6, 3, 3)
    } else {
        setUpEnemies(7, 0, 1)
        setUpEnemies(7, 1, 3)
        setUpEnemies(7, 2, 2)
        setUpEnemies(7, 3, 0)
        gameUpdateTime = 1000
    }
}
info.onLifeZero(function () {
    game.over(false)
})
let randomDude = 0
let sprite_list: Sprite[] = []
let mySprite2: Sprite = null
let projectile2: Sprite = null
let bomb: Sprite = null
let EnemyList: Sprite[] = []
let pos = 0
let numEnemies = 0
let gameUpdateTime = 0
let changeVelocity = 0
let levelComplete = 0
let changeRow = 0
let numMissiles = 0
let sceneNumber = 0
let ship: Sprite = null
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 f f f f f f f 4 e f f f f f e 4 4 e f f f f f f f f f f f f f f f f e 4 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 f f f f f f f 4 4 f f f f f e 4 4 f f f f f f f f f f f f f f f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 e f f f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 e f f f f f 4 4 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 4 f f f f f 4 4 4 e f f f 4 4 4 4 f f f e 4 e f e 4 4 4 e f f f f 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 4 e f f f e 4 4 4 e f f f 4 4 4 4 f f f e 4 4 4 4 4 4 4 4 e f f f 4 4 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 e f f f e 4 4 4 4 f f f f e 4 4 f f f e 4 4 e f f f e 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 e 4 4 f f f 4 4 e 4 4 f f f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 f 4 4 e f e 4 4 f 4 4 e f f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 f e 4 e f e 4 e f 4 4 e f f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 e f f 4 4 f 4 4 e f e 4 e f f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 e f f e 4 e 4 4 f f e 4 4 f f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 e f f e 4 4 4 e f f e 4 4 f f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 e f f f 4 4 4 f f f f 4 4 e f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 f f f f e 4 4 f f f f 4 4 e f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 f f f f e 4 e f f f f e 4 e f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 e f f f f f 4 f f f f f e 4 4 f f e 4 4 f f f e 4 4 f f f f f 4 4 e f f f e 4 4 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e e e e e e 2 2 2 2 2 2 2 2 e e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e e 2 2 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 e e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e 2 2 4 4 4 4 4 4 4 4 4 7 b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 4 2 e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 2 2 4 4 4 4 4 4 7 7 b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b 7 7 7 7 4 4 4 4 4 2 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 2 2 4 4 4 4 7 7 b b b b b b b 7 7 7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 b 7 7 7 7 7 4 4 4 e e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 2 4 4 4 4 4 7 7 b b 7 7 b 7 4 4 4 4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 7 b b b b b b b e e 4 2 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 2 4 4 4 4 4 7 7 b b b 7 7 4 4 4 4 4 4 2 2 2 e e e e e e e e e e e e e e e e e e e e e e e 2 2 2 4 4 4 4 4 7 b b b b 7 7 4 4 4 e e f f f f f f f f f f f f f f f f f f f f e e e e 2 2 2 e e f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 2 4 4 4 4 7 b b 7 7 b b 4 4 4 4 2 2 e e e e e e e f f f f f f f f f f f f f f f f f f f f f f f f e e e e 2 2 4 4 b b b 7 7 7 7 7 4 4 e e f f f f f f f f f f f f f f f e e 2 4 4 4 4 4 4 4 4 4 e f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 2 4 4 4 7 b b 7 7 7 7 4 4 4 4 2 e e e f f f e e 2 2 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e b b e 4 4 4 7 7 7 7 7 4 4 4 e f f f f f f f f f f f e e 4 4 4 7 7 7 b b 7 7 7 4 2 e f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e f f f f f f e e 2 4 4 4 7 7 b b 7 7 4 4 4 4 e e e f f f f f e e 4 4 4 4 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b c e e e 2 4 4 4 7 b 7 7 4 4 e e f f f f f f e e 4 4 4 7 7 7 7 b 7 7 b 7 b b 4 2 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e e 2 2 4 4 2 2 e e e e 2 4 4 4 7 b b 7 7 4 4 4 4 2 e e f f f f f f e 2 4 4 4 7 7 7 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f f c b d c f f f f f e e 4 4 4 4 b b 7 4 4 e e f f e e 4 4 4 7 7 b b 7 4 4 4 4 b b 7 7 4 e f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 2 4 4 4 4 4 4 4 4 4 4 2 4 4 4 7 7 7 7 7 4 4 4 4 e e f f f f f f f e e 4 4 4 7 7 7 7 7 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f c b d c f f f f f f f f f e e 4 4 4 7 7 7 4 4 e e 4 4 4 7 7 7 7 7 4 4 4 2 4 4 b b b 7 4 e f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 2 4 4 4 7 b b 7 b b 7 7 4 4 4 7 b b b 7 4 4 4 4 e e f f f f f f f e e 4 4 4 7 b 7 7 7 7 7 4 e f f f f f f f f f f f f f f f f f f f f f f f f f c b d b f f f f f f f f f f f f e e 4 4 4 7 b b 4 4 4 7 7 7 b 7 4 4 2 e e e 4 7 b 7 7 4 e f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f e 2 2 4 4 7 7 7 7 b 7 7 7 7 b b b 7 b b 7 7 4 4 4 4 e e f f f f f f f e e 2 4 4 4 4 7 b 7 7 7 7 7 4 e f f f f f f f f f f f f f f f f f f f f f f f f c b 1 b f f f f f f f f f f f f f f f e e e 4 4 7 7 7 b 7 7 b 7 4 4 e e f e 2 4 7 b 7 4 2 e f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f e e 2 4 4 7 7 b b 7 b 7 7 4 4 7 b 7 7 b 7 7 4 4 4 4 e e f f f f f f f f f e 2 2 2 2 2 2 4 7 7 7 7 7 7 4 e f f f f f f f f f f f f f f f f f f f f f f f c b 1 d c f f f f f f f f f f f f f f f f f f e e 4 4 7 b 7 b 7 4 2 e f f f e 4 7 7 b 4 4 e f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f e 2 4 4 7 7 b b b 7 4 4 4 4 4 4 7 7 7 b 7 7 4 4 4 e e f f f f f f f f f f f f e e e e e e 4 7 7 7 7 7 7 4 e f f f f f f f f f f f f f f f f f f f f f f c b 1 d c f f f f f f f f f f f f f f f f f f f f f e 4 4 4 7 b b 4 e f f f e 4 4 b 7 7 4 e f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f e 2 4 4 7 7 7 b 7 4 4 4 2 2 2 4 4 7 7 b 7 4 4 4 2 e f f f f f f f f f f f f f f f f f f f e 4 7 7 7 7 7 7 4 e f f f f f f f f f f f f f f c c f f f f f c b 1 d c f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 7 b 7 4 e e e 2 4 7 b 7 4 e f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f e 2 4 4 7 b 7 7 4 4 2 2 e e e 2 4 7 b b 7 4 4 4 e e f f f f f f f f f f f f f f f f f f f f e 4 7 7 7 7 7 7 4 e f f f f f f f f f f f f f f c b c f c f f b 1 1 b f f f f f f f f f f f f f f f f f f f f f f f f f f e e 4 4 b 7 4 4 2 4 7 b 7 4 2 e f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f e 2 4 7 7 7 7 7 4 4 2 e e f f e 2 4 7 7 4 4 4 e e f f f f f f f f f f f f f f f f f f f f f f e 4 7 b 7 7 7 7 4 e f f f f f f f f f f f f f f c d b c b c b 1 1 b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 7 7 b 4 b b b 4 4 e f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f e 2 4 7 7 b b 7 4 2 e e f f f f e 2 4 7 4 4 4 e e f f f e e e f f f f f f f f f f f f f f f f f e 4 b b 7 7 7 7 4 e f f f f f f f f f f f f f f f b d b d b 1 1 d c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e 4 4 7 b b 7 4 4 e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f e 2 4 7 7 7 7 7 4 2 e f f f f f f e 4 4 4 4 2 e f f f e e 2 2 e f f f f f f f f f f f f f f f f f 2 4 b 7 7 7 7 7 4 e f f f f f f f f f f f f f f f c d d 1 1 1 d c c c f f f f f f f f f f f f f f e e e e f f f f f f f f f f f f f e 4 4 b b 7 4 e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f e 2 4 7 7 7 7 7 4 2 e f f f f f f f 2 4 4 4 2 e f e e 2 2 4 2 e f f f f f f f f f f f f f f f f f f 2 4 b 7 7 7 7 7 4 e f f f f f f f f f f f c c c c b d 1 1 1 1 d b c f f f f f f f f f f f f f e e 2 2 2 f f f f f f f f f f f f f f 2 4 7 b 7 4 e f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f e 2 4 7 7 7 7 7 4 2 e f f f f f f f e 2 4 4 e e e e 2 4 4 4 4 e f f f f f f f e e 2 2 e e f f f f f f 2 4 b 7 7 7 7 7 4 e f f f f f f f f f f c b b d d d 1 1 1 1 1 d b b c c f f f f f f f e e e 2 4 4 4 2 e f f f f f f f f f f f f f e 4 4 b 7 4 e f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f e 2 4 4 7 7 7 7 4 4 e f f f f f f f f e 2 2 e e e 2 4 4 4 4 4 2 e f f f e e e 2 2 4 4 4 4 2 e e f f f f 2 4 7 7 7 7 7 7 4 e f f f f f f f e e e e 4 4 e e c d 1 1 1 d d b b b c f f f f e e e 2 4 4 4 4 4 2 e f f f f f f f f f f f f e e 2 4 7 b 4 2 e f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f e 2 4 b 7 b 7 7 4 2 e f f f f f f f f e 2 2 2 2 4 4 7 7 7 4 4 e f f e e 2 2 4 4 4 7 7 7 7 4 4 e f f f f 2 4 7 7 7 7 7 7 4 e f f f f e e e 2 4 4 4 7 7 e c c b 1 1 1 b c f f f f f e e 2 2 4 4 4 7 7 7 4 4 2 f f f f f f f f f f e e 2 2 4 4 7 7 7 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f e 2 4 7 b 7 b 7 4 4 e f f f f f f f f e 2 2 2 4 4 7 7 7 b b 4 2 e e 2 2 4 4 4 b 7 7 b b b 7 7 4 2 e f f f 2 4 7 7 7 7 7 7 4 e e e e 2 4 4 4 4 7 7 7 7 b 7 7 b d b b b b f f f e e 2 4 4 4 4 7 7 b 7 7 7 4 4 2 e f f f f f f e e 2 2 4 4 4 4 7 7 b b b 7 4 2 e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 2 4 4 b 7 7 7 b 4 2 e f f f f f f f e 2 2 4 4 7 b 7 7 b 7 4 4 2 4 4 4 4 7 7 7 7 7 b b b b b 7 7 4 2 f f f 2 4 7 7 7 7 7 7 4 2 2 4 4 4 4 7 7 b b 7 7 7 7 7 b b b e e c b c f e 2 4 4 4 7 b b b b b 7 7 7 7 7 4 e f f f e e 2 2 4 4 4 4 7 7 7 7 b b 7 b b 7 4 e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f e 2 4 b b 7 7 7 7 4 e f f f f f f f f f e e 2 4 7 7 7 7 7 7 4 4 4 4 4 7 b b 7 7 7 7 7 7 7 b 7 7 7 4 2 e f e 2 4 7 b 7 7 7 7 4 4 4 4 7 7 b b 7 b b b 7 7 7 b c b b 4 e c b c e 2 4 7 7 b 7 7 7 7 7 7 b b 7 b 7 4 e e e 2 2 4 4 4 4 7 7 b b 7 b b 7 7 7 7 7 7 4 2 e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 2 4 7 7 7 7 7 7 4 2 e f f f f f f f f f f f e 2 4 7 b b 7 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 7 7 4 2 e f e 2 4 b 7 7 7 7 7 4 4 4 4 4 4 4 7 7 7 7 7 b b b c c b b 4 e f c e 2 4 7 b 7 7 b b b b 7 7 b 7 7 7 7 4 e e 2 2 4 4 4 4 4 7 7 b b 7 7 7 7 7 7 b 7 7 4 2 e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e 2 4 7 7 7 b 7 7 4 2 e f f f f f f f f f f f f 2 4 7 b 7 b 4 4 2 e e 2 2 2 4 4 b 7 7 7 7 7 7 7 7 7 4 2 e f e 2 4 b 7 7 7 7 7 4 2 e 2 2 2 2 4 4 b 7 7 7 7 b b b b b 4 e f f e 2 4 7 7 b 7 b 7 7 7 4 7 7 7 7 b b 4 e e e e 2 2 2 2 4 4 4 4 7 7 7 7 7 7 7 7 b 7 4 2 e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 2 4 b b 7 b b 7 b 4 2 f f f f f f f f f f f f f 2 4 7 b 7 7 7 4 2 f f 2 4 4 4 7 7 7 b b 7 7 7 7 7 7 4 2 e f e 2 4 7 7 b b b b 4 e f e 2 2 4 4 7 7 7 b b 7 7 7 7 7 7 4 e f f e 4 7 7 7 7 7 7 4 4 4 4 b 7 7 b 7 7 4 e f f f f f e e 2 2 4 4 7 b b b 7 7 b b b 7 4 2 e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f e 2 4 7 7 7 b 7 7 7 4 e f f f f f f f f f f f f e 2 4 7 7 b b 7 4 2 e e 2 4 7 7 b 7 b b b 7 7 7 7 7 b 4 2 e f e 2 4 b b b 7 b b 4 e f e 2 4 7 b b 7 b b 7 7 7 7 7 b 7 4 e f f 2 4 7 7 7 7 7 4 4 2 2 4 7 7 7 7 7 4 4 e f f f f f f e 2 4 4 7 7 b 7 7 7 7 7 b b 7 4 2 e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 2 4 7 6 6 6 6 6 6 7 4 e f f f f f f f f f f f e 2 4 7 6 6 6 6 6 7 4 e e 4 4 6 6 6 6 6 b 4 4 7 6 6 6 7 4 2 e f e 2 4 6 6 6 6 6 b 4 e f e 4 7 6 6 6 6 7 4 4 7 6 6 6 6 7 4 e f e 2 4 7 6 6 6 4 2 e e 2 4 6 6 6 6 7 4 2 f f f f f f e 2 4 7 6 6 6 6 7 4 4 7 6 6 6 6 4 2 e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f e 2 4 c 6 6 6 6 6 6 7 4 e f f f f f f f f f f e 2 4 4 6 6 6 6 6 6 c 4 2 e 4 e 6 6 6 6 e 4 4 4 6 6 6 6 c 4 2 f f e 2 4 6 6 6 6 6 b 4 e f e 4 b 6 6 6 7 4 2 4 7 6 6 6 6 e 4 e f e 2 4 6 6 6 c 4 2 4 4 4 7 6 6 6 6 e 4 e f f f f f f e 2 4 6 6 6 6 b 4 4 4 e 6 6 6 6 4 2 e f f f e e e e f f f f f f f f f f f f f 
f f f f f f f f e 2 4 6 6 6 6 6 6 6 7 4 2 f f f f f f f f e 2 2 4 e c 6 6 6 6 6 6 6 4 4 2 4 e 6 6 6 c 4 e 2 4 6 6 6 6 c 4 2 e e 2 4 4 6 6 6 6 6 b 4 e f 2 4 c 6 6 6 4 4 e 4 7 6 6 6 6 e 4 e f e 4 7 6 6 6 c 4 4 4 7 c 6 6 6 c 7 4 2 e f f f f f f e 2 4 6 6 6 6 4 4 2 4 7 6 6 6 6 4 2 e f e e 2 2 2 e f f f f f f f f f f f f f 
f f f f f f f f 2 4 e 6 6 6 6 6 6 6 c 4 2 2 e e e e e e 2 2 4 4 7 6 6 6 6 6 6 6 6 6 7 4 2 4 c 6 6 6 7 4 e 4 7 6 6 6 6 c 4 2 2 2 4 4 4 6 6 6 6 6 b 4 e e 2 4 6 6 6 6 4 2 e 4 7 6 6 6 6 4 2 e 2 2 4 e 6 6 6 6 c c 6 6 6 6 c b 4 4 2 e f f f f f f f e 4 e 6 6 6 6 4 e e 4 7 6 6 6 6 4 2 e 2 2 4 2 2 e f f f f f f f f f f f f f f 
f f f f f f f e 2 4 c 6 6 6 6 6 6 6 6 7 4 2 2 2 2 2 2 2 4 4 7 c 6 6 6 6 6 6 6 6 6 6 6 4 4 4 6 6 6 6 7 4 2 4 7 6 6 6 6 c 4 4 4 4 4 4 4 6 6 6 6 6 b 4 e e 4 4 6 6 6 6 4 2 4 4 c 6 6 6 6 4 2 2 4 4 4 c 6 6 6 6 6 6 6 6 6 b 4 4 2 e e f f f f f f f f 2 4 7 6 6 6 c 4 2 2 4 c 6 6 6 6 4 2 2 4 4 4 2 e f f f f f f f f f f f f f f f 
f f f f f f f e 2 4 c 6 6 6 6 6 6 6 6 6 e 4 4 4 4 4 4 4 7 c 6 6 6 6 6 6 6 6 6 6 6 6 6 e 4 4 6 6 6 6 7 4 4 4 c 6 6 6 6 c 4 4 4 e 4 4 e 6 6 6 6 6 b 4 e e 4 b 6 6 6 c 4 4 4 e 6 6 6 6 6 4 4 4 4 4 4 c 6 6 6 6 6 6 6 6 c 4 2 2 e f f f f f f f f f f 2 4 c 6 6 6 e 4 4 4 7 6 6 6 6 6 4 4 4 4 4 2 e f f f f f f f f f f f f f f f f 
f f f f f f f e 2 4 6 6 6 6 6 6 6 6 6 6 6 6 c c 7 c c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e 4 4 6 6 6 6 c 7 c 6 6 6 6 6 6 6 c c 7 4 2 4 e 6 6 6 6 6 7 4 e 2 4 7 6 6 6 6 7 e 6 6 6 6 6 6 6 c 7 c e 4 4 6 6 6 6 c e 4 7 6 7 4 2 e e e e e f f f f f f e 2 4 c 6 6 6 c 7 7 c 6 6 6 6 6 6 7 e e 4 4 e f f f f f f f f f f f f f f f f f 
f f f f f f f e 2 4 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 7 4 4 b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b 4 2 2 4 e 6 6 6 6 6 7 4 e 2 4 c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b 4 4 4 c b 7 4 4 4 4 e 6 4 2 2 2 2 2 2 2 2 2 e e f f e 2 4 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 4 4 2 e f f f f f f f f f f f f f f f f f 
f f f f f f f e 2 4 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e 4 4 4 4 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 4 2 e e 4 e 6 6 6 6 6 e 4 e 2 4 c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 4 2 2 4 4 4 4 2 2 4 4 6 c 4 4 4 4 4 4 4 4 4 4 4 2 e f e 2 4 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 4 4 2 e f f f f f f f f f f f f f f f f f f 
f f f f f f f e 2 4 c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 6 6 6 6 6 6 6 6 6 7 4 4 2 2 2 4 c 6 6 6 6 6 6 6 c 7 7 6 6 6 7 4 2 e f e 4 e 6 6 6 6 e 4 2 e 2 4 6 6 6 6 6 6 6 6 c 7 6 6 6 6 7 4 2 e 2 2 2 2 e 2 2 4 b 6 6 c e c c c c c c c b 4 4 4 e 2 4 7 6 6 6 6 6 6 6 6 c 7 b 6 6 6 4 4 2 e f f f f f f f f f f f f f f f f f f f 
f f f f f f f e 2 4 7 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 7 7 6 6 6 6 6 6 c e 4 4 2 2 e e e 4 c 6 6 6 6 6 6 7 4 4 4 6 c 4 4 2 e f f e 4 7 6 6 6 7 4 4 e e 2 4 6 6 6 6 6 6 c e 4 4 c 6 6 7 4 2 e f f e e f f 2 4 4 e 7 e e e e 6 6 6 6 6 6 6 6 e 4 4 2 4 e 6 6 6 6 6 6 c 7 4 4 e 6 6 7 4 2 e f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f e 4 4 6 6 6 6 6 6 6 6 6 6 6 6 6 6 b 4 4 b 6 6 6 6 c 7 4 4 2 2 e e f f e 4 7 c 6 6 c 7 4 4 4 2 4 e 4 4 2 e f f f 2 4 e 6 c 4 4 2 e f e 2 4 c 6 6 c 7 e 4 4 2 4 e c 4 4 2 e f f f f f f e 2 4 4 4 4 4 4 4 4 4 7 6 6 6 6 6 6 6 c 4 4 4 4 c 6 6 6 c 7 4 4 2 4 e c 7 4 2 e f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f e 2 4 4 c 6 6 6 6 6 6 6 6 6 6 7 4 4 2 4 c 6 6 c e 4 4 2 2 e e f f f f e 2 4 4 4 4 4 4 4 e e e 4 4 4 2 e f f f f 2 4 4 e 4 4 2 e f f f 2 4 4 4 4 4 4 4 e e e 4 4 4 4 2 e f f f f f f e 2 2 2 2 e e 2 2 4 4 4 4 e 6 6 6 6 6 6 6 7 4 2 4 4 4 4 4 4 4 2 e e 2 4 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f e 2 4 4 e c 6 6 6 6 c c e 4 4 4 2 2 4 6 c 7 4 4 2 2 e f f f f f f f f e e 2 2 2 e e e f f e 2 2 e e f f f f f e 2 4 4 2 2 e f f f f e 2 2 2 2 e e e f f f e 2 2 e e f f f f f f f e e e e f f e 2 4 4 4 2 2 4 c 6 6 6 6 6 6 c 4 2 2 2 4 4 2 2 e e f f e 2 2 2 e f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f e 2 4 4 4 4 4 4 4 4 4 4 2 2 e 2 4 4 7 4 4 2 2 e f f f f f f f f f f f f f f f f f f f f f e f f f f f f f f f e 2 2 e f f f f f f f f e e f f f f f f f f e e f f f f f f f f f f f f f f e 2 4 4 4 2 e 2 4 7 6 6 6 6 6 6 c 4 2 e e e e e f f f f f f e e e f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f e e 2 2 2 2 2 2 2 2 2 e e e 2 4 4 4 2 2 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 4 e 4 2 e e 2 4 6 6 6 6 6 6 c 4 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f e e e e e e e e f f f e 2 2 2 2 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 4 c 4 4 e e 2 4 4 6 6 6 6 6 6 b 4 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f e 2 2 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 4 c 7 4 2 e 2 4 4 c 6 6 6 6 6 6 4 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 4 c 6 4 4 2 2 4 4 c 6 6 6 6 6 6 c 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 4 c 6 7 4 2 4 4 b 6 6 6 6 6 6 6 c 4 4 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 4 c 6 c 4 4 4 4 7 6 6 6 6 6 6 6 c 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 4 c 6 6 7 4 4 7 6 6 6 6 6 6 6 6 c 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 7 c 6 6 6 7 e c 6 6 6 6 6 6 6 6 c 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 2 4 c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 c 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 4 7 6 6 6 6 6 6 6 6 6 6 6 6 6 7 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 4 7 6 6 6 6 6 6 6 6 6 6 6 6 e 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 4 7 6 6 6 6 6 6 6 6 6 6 6 e 4 2 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 7 6 6 6 6 6 6 6 6 6 c 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 7 6 6 6 6 6 6 6 6 7 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 7 6 6 6 6 6 6 c 4 4 2 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 7 6 6 6 6 6 7 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 6 6 6 c 4 4 2 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 e 6 c e 4 4 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e 4 4 7 4 4 2 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 4 4 4 2 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f e e f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
pause(2000)
game.showLongText("Start Game", DialogLayout.Bottom)
scene.setBackgroundColor(15)
scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
effects.starField.startScreenEffect()
ship = sprites.create(img`
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . 2 . . 1 1 1 . . 2 . . . . 
. . . 2 . . 1 1 1 . . 2 . . . . 
. . . 1 . 1 1 1 1 1 . 1 . . . . 
2 . . 1 8 1 1 2 1 1 8 1 . . 2 . 
2 . . 8 1 1 2 2 2 1 1 8 . . 2 . 
1 . . 1 1 1 2 . 2 1 1 1 . . 1 . 
1 . 1 1 1 1 1 1 1 1 1 1 1 . 1 . 
1 1 1 1 1 2 1 1 1 2 1 1 1 1 1 . 
1 1 1 . 2 2 1 1 1 2 2 . 1 1 1 . 
1 1 . . 2 2 . 1 . 2 2 . . 1 1 . 
1 . . . . . . 1 . . . . . . 1 . 
`, SpriteKind.Player)
sceneNumber = 0
setupScene(sceneNumber)
ship.setPosition(80, 112)
controller.moveSprite(ship, 100, 0)
info.setLife(3)
numMissiles = 3
ship.setFlag(SpriteFlag.StayInScreen, true)
changeRow = 0
levelComplete = 0
changeVelocity = 0
gameUpdateTime = 2000
game.onUpdateInterval(gameUpdateTime, function () {
    randomDude = Math.randomRange(0, EnemyList.length - 1)
    bomb = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 5 . . . . . . . 
. . . . . . . 2 5 . . . . . . . 
. . . . . . . 2 5 2 . . . . . . 
. . . . . . . . 5 2 . . . . . . 
. . . . . . . . 5 . . . . . . . 
. . . . . . . . 5 . . . . . . . 
. . . . . . . . 8 . . . . . . . 
`, EnemyList[randomDude], 0, 40)
    bomb.setKind(SpriteKind.Bomb)
    changeRow += 2000
    changeVelocity += 2000
    if (changeVelocity >= 10000) {
        changeVelocity = 0
        for (let value22 of EnemyList) {
            value22.setVelocity(value22.vx * -1, 0)
        }
    }
    if (changeRow >= 20000) {
        changeRow = 0
        for (let gameUpdateTime2 of EnemyList) {
            gameUpdateTime2.setPosition(gameUpdateTime2.x, gameUpdateTime2.y + 20)
        }
    }
})
