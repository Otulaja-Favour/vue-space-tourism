<template>
  <div v-if="data" class="tech-container">
    <div class="tech-content">
      <!-- Left: Image -->
      <div class="tech-image-container">
        <img id="img"
          :src="selectedImage"
          :alt="selectedTechnology.name"
          class="tech-image"
        />
      </div>

      <div id="techtoget">
        <p id="p">Space Launch 101</p>

        <!-- Right: Navigation + Details -->
        <div class="tech-info">
          <!-- Circle Navigation Buttons -->
          <div class="dot-buttons">
            <button
              v-for="(item, index) in data.technology"
              :key="item.name"
              @click="selectTechnology(item.name)"
              :class="{ active: item.name === selectedTechnology.name }"
            ></button>
          </div>

          <!-- Technology Details -->
          <div class="tech-details">
            <h4>The terminology...</h4>
            <h3>{{ selectedTechnology.name }}</h3>
            <p>{{ selectedTechnology.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import jsonData from '/public/data.json'

// Import all technology images
const techImages = import.meta.glob('@/assets/technology/*.{jpg,jpeg,png,webp}', {
  eager: true,
})

export default {
  data() {
    return {
      data: null,
      selectedTechnology: null,
    }
  },
  computed: {
    selectedImage() {
      if (!this.selectedTechnology) return ''
      const filename = this.selectedTechnology.images.portrait.split('/').pop()
      const path = `/src/assets/technology/${filename}`
      return techImages[path]?.default || ''
    },
  },
  methods: {
    selectTechnology(name) {
      this.selectedTechnology = this.data.technology.find(
        (tech) => tech.name === name
      )
    },
  },
  created() {
    this.data = jsonData
    this.selectedTechnology = jsonData.technology[0]
  },
}
</script>

<style scoped>
.tech-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.tech-content {
  display: flex;
  flex-direction: row-reverse;
}

.tech-image-container {
  flex: 1 1 40%;
  text-align: center;
}

.tech-image {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.tech-info {
  display: flex;
  flex-direction: row;
  width: 50%;
}

.dot-buttons {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0px 30px 20px 0px;
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

.tech-details h4 {
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 0.5rem;
}

.tech-details h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.tech-details p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
