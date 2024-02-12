### @hideIteration true
### @flyoutOnly true
# Mission 9

```blocks
player.onChat("level3", function () {
    agent.turn(LEFT_TURN)
    
    AgentExtension.agentMoveFourDirection_Extra(FourDirection.Forward, 1)
    
    if (CodeCosmos.testForBlock_belowAgent(GRASS) && AgentExtension.agentNextToBamboo()) {
        CodeCosmos.spawnPanda_Extra()
    } else if (CodeCosmos.testForBlock_belowAgent(GRASS)) {
        CodeCosmos.spawnParrot_Extra()
    }
    
})
```

```template
player.onChat("level3", function () {
    
})
```

## Multiple Selection
Finish on the gold block. Don't walk on fire or on TNT. Spawn a parrot if on sand. Spawn a panda if on grass AND next to bamboo.