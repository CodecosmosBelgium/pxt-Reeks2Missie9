### @hideIteration true
### @flyoutOnly true
# Mission 9

```blocks
player.onChat("level2", function () {
    for (let index = 0; index < 24; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(GRASS) && CodeCosmos.testBlockNextTo(BAMBOO)) {
            CodeCosmos.spawnPanda()
        } else if (testBlockUnder(FIRE)) {
            CodeCosmos.extinguishFire()
        } else {
            CodeCosmos.placeBush2()
        }
    }
})
```

```template
player.onChat("level2", function () {
    
})
```

## Multiple Selection
Use the learning platform to solve the exercise.