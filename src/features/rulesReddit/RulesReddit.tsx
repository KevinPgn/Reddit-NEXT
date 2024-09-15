export const RulesReddit = () => {
  return <div className="w-[350px] p-3 h-fit border border-gray-200 dark:border-zinc-800 rounded-md">
    <div className="flex items-center gap-2">
        <img src="/pfp.png" alt="pfp" className="w-10 h-10" />
        <span className="text-lg font-semibold">Posting to Reddit</span>
    </div>

    <div className="w-full h-px bg-gray-200 dark:bg-zinc-800 my-3"></div>

    <ol className="list-decimal list-inside text-md flex flex-col gap-2">
        <li className="ml-2 border-b border-gray-200 dark:border-zinc-800 pb-2">Remember the human</li>
        <li className="ml-2 border-b border-gray-200 dark:border-zinc-800 pb-2">Behave like you're in public</li>
        <li className="ml-2 border-b border-gray-200 dark:border-zinc-800 pb-2">Look for the original content</li>
        <li className="ml-2 border-b border-gray-200 dark:border-zinc-800 pb-2">Search for duplication before posting</li>
        <li className="ml-2 border-b border-gray-200 dark:border-zinc-800 pb-2">Read the rules before posting</li>
    </ol>
  </div>
}