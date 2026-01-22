import {useState,useEffect} from 'react';

function StoryGame({story,onNewStory}){
    const [currentNodeId,setCurrentNodeId]=useState(null);
    const [currentNode,setCurrentNode]=useState(null);
    const [options,setOptions]=useState([])
    const [isEnding,setIsEnding]=useState(false)
    const [isWinningEnding,setIsWinningEnding]=useState(false)

    useEffect(() => {
            if(story && story.root_node){
                const rootNodeId=story.root_node.id
                setCurrentNodeId(rootNodeId)
            }
        },[story])

    useEffect(() => {
            if(currentNodeId && story && story.all_nodes)
            {
                const node=story.all_nodes[currentNodeId]
                setCurrentNode(node)
                setIsEnding(node.is_ending)
                setIsWinningEnding(node.is_winning_ending)

                if(!node.is_ending && node.options && node.options.length>0){
                    setOptions(node.options)
                }
                else{
                    setOptions([])
                }
            }
        },[currentNodeId,story])

    const chooseOption=(optionId) => {
            setCurrentNodeId(optionId)
        }
    const restartStory=() => {
            if(story && story.root_node){
                setCurrentNodeId(story.root_node.id)
            }
        }
    return (
  <div className="story-game">
    {/* CENTER STORY AREA */}
    <div className="story-center">
      <div className="story-header">
        <h2>{story.title}</h2>
      </div>

      {currentNode && (
        <div className="story-node">
          <p>{currentNode.content}</p>
        </div>
      )}
    </div>

    {/* CHOICES OR ENDING */}
    {currentNode && (
      <>
        {isEnding ? (
          <div className="story-ending">
            <h3>{isWinningEnding ? "Congratulations" : "The End"}</h3>
            <p>
              {isWinningEnding
                ? "You reached a winning ending."
                : "Your adventure has ended."}
            </p>
          </div>
        ) : (
          <div className="story-choices">
            {options.map((option, index) => (
              <button
                key={index}
                className="choice-btn"
                onClick={() => chooseOption(option.node_id)}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
      </>
    )}

    {/* FOOTER CONTROLS */}
    <div className="story-controls">
      <button onClick={restartStory}>Restart Story</button>
      {onNewStory && (
        <button className="ghost" onClick={onNewStory}>
          New Story
        </button>
      )}
    </div>
  </div>
);
}

export default StoryGame;