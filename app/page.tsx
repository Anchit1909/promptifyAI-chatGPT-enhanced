import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center text-white">
        <h1 className="mb-20 text-5xl font-bold">ChatGPT</h1>

        <div className="flex space-x-2 text-center">
          <div>
            <div className="mb-5 flex flex-col items-center justify-center gap-y-2">
              <SunIcon className="h-8 w-8"></SunIcon>
              <h2>Examples</h2>
            </div>

            <div className="space-y-2">
              <button type="button" className="infoText">
                &quot;Explain quantum computing in simple terms&quot; →
              </button>
              <button type="button" className="infoText">
                &quot;Got any creative ideas for a 10 year old’s birthday?&quot;
                →
              </button>
              <button type="button" className="infoText">
                &quot;How do I make an HTTP request in Javascript?&quot; →
              </button>
            </div>
          </div>

          <div>
            <div className="mb-5 flex flex-col items-center justify-center gap-y-2">
              <BoltIcon className="h-8 w-8"></BoltIcon>
              <h2>Capabilities</h2>
            </div>

            <ul className="space-y-2">
              <li className="infoText">
                Remembers what user said earlier in the conversation
              </li>
              <li className="infoText">
                Allows user to provide follow-up corrections
              </li>
              <li className="infoText">
                Trained to decline inappropriate requests
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-5 flex flex-col items-center justify-center gap-y-2">
              <ExclamationTriangleIcon className="h-8 w-8"></ExclamationTriangleIcon>
              <h2>Limitations</h2>
            </div>

            <ul className="space-y-2">
              <li className="infoText">
                May occasionally generate incorrect information
              </li>
              <li className="infoText">
                May occasionally produce harmful instructions or biased content
              </li>
              <li className="infoText">
                Limited knowledge of world and events after 2021
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
