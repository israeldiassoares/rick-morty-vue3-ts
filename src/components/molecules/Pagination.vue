<template>
    <div class="flex flex-col items-center">
        <!-- Help text -->
        <span class="text-sm text-green-700 dark:text-green-400">
            Showing <span class="font-semibold text-green-900 dark:text-white">{{ store.getCurrentNumberPage }}</span> to <span
                class="font-semibold text-green-900 dark:text-white">{{ store.getQuantityPage }}</span> of <span class="font-semibold text-green-900 dark:text-white">{{ store.getQuantityPage }}</span>
            Entries
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
            <!-- Buttons -->
            <button
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-800 rounded-l hover:bg-green-900 dark:bg-green-800 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white"
                @click="store.getPrevPageData()"
            >
                <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                Prev
            </button>
            <button
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-800 border-0 border-l border-green-700 rounded-r hover:bg-green-900 dark:bg-green-800 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-700 dark:hover:text-white"
                @click="store.getNextPageData()"
            >
                Next

                <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>

            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '../../stores/character'
const store = useCharacterStore()

</script>