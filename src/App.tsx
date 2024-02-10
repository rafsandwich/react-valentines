import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "No",
  "*mhm* No",
  "whoopsie misclick! haha! this one is no",
  "oops jess you clicked the wrong one again!!",
  "I get it it's easily done really! anyway back to the right buttton!",
  "slippery fingers! god they annoy me too! haha anyway!",
  "jess you should like wash your hands maybe? you still got some noodle on them I thinks",
  "ohhh I get it now! it's a mouse issue! try turning it off and on again?",
  "dwdw I'll just update the drivers for you 1 sec ...",
  "ahh better, try now! you should have full control and will no longer press this button!",
  "...",
  "maybe there's a mouse .. inside your mouse?",
  "should I make the button braile?",
  "ohh you think I can't keep doing this?",
  "did I tell you this one time about when I got boba with these idiots",
  "wtf is taro anyway?? it sounds like a spritual butt massage",
  "bro at this point I think the yes button should be so fucking huge that you can't even see this shit",
  "so uh yeah happy valentines day ig!!",
  "so uh yeah happy valentines day ig!!",
  "so uh yeah happy valentines day ig!!",
  "... so uh yeah happy valentines day ig!!",
  "why are you still here this text won't change anymore stoopid",
  "can we like play a game now or smth?",
  "zankyou no terror??",
  "you know I got in on fri night at like midnight and just decided to fucking code this",
  "what's wrong with me",
  "help",
  "don't make me reloop all this text",
  "I'ma just make it say smth dumb over and over again then",
  "jess look like avocado",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false); //two states
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1); //increment no click count
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  } //index into array, get element at current count, or otherwise the last element if out of phrases

  return (
    <div className="the-spicy-container">
      {yesPressed ? (
        <>
          <img
            alt="successImage"
            src="https://media.tenor.com/KpZkat4J3qAAAAAi/peach-goma.gif"
          />
          <div className="successText">woooooooo!!!</div>
        </> //on yes press, otherwise
      ) : (
        <>
          <img
            alt="initImage"
            src="https://media.tenor.com/Ex1pkci_-v8AAAAi/white-cute-cat-hearts.gif"
          />

          <div className="questionText">
            jess do you wanna be my valentines?
          </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes!
            </button>

            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
