
function ClubEvent({ title, date, dayOfWeek, location }) {
  return html`
  <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
  <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
      <span class="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">Jul</span>
      <span class="font-medium text-2xl leading-none text-gray-300 title-font">13</span>
    </div>
  </div>
  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
    <h2 class="text-white text-lg title-font font-medium mb-2">Shanty Club @ Smith's</h2>
    <p class="leading-relaxed text-base">Join us for a rollicking foot stomping time.</p>
    <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
           class="w-4 h-4 ml-2" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  </div>
</div>
`
}