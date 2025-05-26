<template>
  <div v-if="data" class="crew-container">
    <div class="crew-content">
      <!-- Left: Image -->
      <div class="crew-image-container">
        <img id="img" :src="selectedImage" :alt="selectedCrew.name" class="crew-image" />
      </div>

      <!-- Right: Buttons + Info -->
      <div class="toget">
        <p id="p">Meet the Crew</p>
        <div class="crew-info">
          <!-- Circle Buttons -->
          <div class="dot-buttons">
            <button
              v-for="member in data.crew"
              :key="member.name"
              @click="selectCrew(member.name)"
              :class="{ active: member.name === selectedCrew.name }"
            ></button>
          </div>

          <!-- Crew Details -->
          <div class="crew-details">
            <h4>{{ selectedCrew.role }}</h4>
            <h3>{{ selectedCrew.name }}</h3>
            <p>{{ selectedCrew.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import jsonData from '/public/data.json'

// Preload crew images from assets
const crewImages = import.meta.glob('@/assets/crew/*.{png,jpg,jpeg,webp}', {
  eager: true,
})

export default {
  data() {
    return {
      data: null,
      selectedCrew: null,
    }
  },
  computed: {
    selectedImage() {
      if (!this.selectedCrew) return ''
      const filename = this.selectedCrew.images.png.split('/').pop()
      const path = `/src/assets/crew/${filename}`
      return crewImages[path]?.default || ''
    },
  },
  methods: {
    selectCrew(name) {
      this.selectedCrew = this.data.crew.find(member => member.name === name)
    },
  },
  created() {
    this.data = jsonData
    this.selectedCrew = jsonData.crew[0]
  },
}
</script>

<style scoped>
.crew-container {
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.crew-content {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  gap: 2rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

.crew-image-container {
  flex: 1 1 40%;
  text-align: center;
}

.crew-image {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.crew-info {
  display: flex;
  flex-direction: column-reverse;
}

.dot-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.dot-buttons button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #ccc;
  cursor: pointer;
}

.dot-buttons button.active {
  background-color: #333;
}

.crew-details h4 {
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
}

.crew-details h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.crew-details p {
  font-size: 1rem;
  line-height: 1.6;
}

.toget {
  display: flex;
  flex-direction: column;
  width: 50%;
}

@media screen and (max-width:900px) {
  .crew-image-container {
    width: 100% !important;
    border: 1px solid !important;
  }
  .toget {
    width: 100%;
  }
}
</style>
