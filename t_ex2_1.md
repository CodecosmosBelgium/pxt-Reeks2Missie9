### @hideIteration true
### @flyoutOnly true
# Mission 9

```blocks
player.onChat("level2", function () {
    for (let index = 0; index < 12; index++) {
        AgentExtension.agentMoveForward()
        if (CodeCosmos.testForBlock_belowAgent(GRASS) || CodeCosmos.testForBlock_belowAgent(DIRT)) {
            CodeCosmos.placeTree()
        } else {
            CodeCosmos.placeGrass()
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