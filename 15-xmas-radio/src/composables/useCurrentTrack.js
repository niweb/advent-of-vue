import { usePlaylist } from '@/composables/usePlaylist'
import { useMediaControls } from '@vueuse/core'
import { nextTick, computed, ref } from 'vue'

const el = ref(document.createElement('AUDIO'))

const { current: currentTrack, state } = usePlaylist()
const { playing, currentTime, duration, volume } = useMediaControls(el, {
  src: currentTrack,
})

export function useCurrentTrack() {
  function play(song = null) {
    if (song) state.value = song
    playing.value = false
    nextTick(() => {
      playing.value = true
    })
  }

  function prettifyTime(time) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.round(time % 60)
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  const progress = computed(() => {
    return currentTime.value / duration.value
  })

  function pause() {
    playing.value = false
  }

  function ff() {
    currentTime.value = Math.min(duration.value, currentTime.value + 10)
  }

  function rewind() {
    currentTime.value = Math.max(0, currentTime.value - 10)
  }

  const durationPretty = computed(() => {
    return prettifyTime(duration.value)
  })
  const currentTimePretty = computed(() => {
    return prettifyTime(currentTime.value)
  })

  const timeDisplay = computed(() => {
    return `${currentTimePretty.value} - ${durationPretty.value}`
  })

  return {
    pause,
    play,
    ff,
    rewind,
    timeDisplay,
    progress,
    currentTrack,
    playing,
    currentTime,
    duration,
    volume,
  }
}
