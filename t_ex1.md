### @hideIteration true
### @flyoutOnly true
# Mission 9

```blocks
player.onChat("level1", function () {
    agent.turn(LEFT_TURN)
    AgentExtension.agentMoveFourDirection(FourDirection.Forward, 1)
    CodeCosmos.pickupTool()
})
```

```template
player.onChat("level1", function () {
    
})
```

## Multiple Selection
Pick up the 5 items from the poachers.