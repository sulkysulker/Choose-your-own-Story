STORY_PROMPT = """
You are a creative story writer. Create a choose-your-own-adventure story.

Generate a story with:
- A title
- Root node with 2 choices
- Each choice leads to a node with 2 more choices
- Some paths end in winning or losing endings

Output in JSON format:
{format_instructions}

Keep it concise and engaging.
"""

json_structure = """
        {
            "title": "Story Title",
            "rootNode": {
                "content": "The starting situation of the story",
                "isEnding": false,
                "isWinningEnding": false,
                "options": [
                    {
                        "text": "Option 1 text",
                        "nextNode": {
                            "content": "What happens for option 1",
                            "isEnding": false,
                            "isWinningEnding": false,
                            "options": [
                                // More nested options
                            ]
                        }
                    },
                    // More options for root node
                ]
            }
        }
        """