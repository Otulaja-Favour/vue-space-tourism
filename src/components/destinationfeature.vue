<template>
  <div v-if="data" class="destination-container">
    <div class="destination-content">
      <!-- Left: Image -->
      <div class="destination-image-container">
        <p id="p">Pick your destination</p>
        <img id="img" :src="selectedImage" :alt="selectedDestination.name" class="destination-image" />
      </div>

      <!-- Right: Navigation + Info -->
      <div class="destination-info">

        <!-- Tab Navigation -->
        <div class="tab-buttons">
          <button
            v-for="place in data.destinations"
            :key="place.name"
            @click="selectDestination(place.name)"
            :class="{ active: place.name === selectedDestination.name }"
          >
            {{ place.name }}
          </button>
        </div>

        <!-- Destination Details -->
        <div class="destination-details">
          <h2>{{ selectedDestination.name }}</h2>
          <p>{{ selectedDestination.description }}</p>
          <div class="destination-meta">
            <div>
              <h5>Avg. Distance</h5>
              <p>{{ selectedDestination.distance }}</p>
            </div>
            <div>
              <h5>Est. Travel Time</h5>
              <p>{{ selectedDestination.travel }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
import jsonData from '/public/data.json'

// Preload destination images
const destinationImages = import.meta.glob('@/assets/destination/*.{png,jpg,jpeg,webp}', {
  eager: true,
})

export default {
  data() {
    return {
      data: null,
      selectedDestination: null,
    }
  },
  computed: {
    selectedImage() {
      if (!this.selectedDestination) return ''
      const filename = this.selectedDestination.images.png.split('/').pop()
      const path = `/src/assets/destination/${filename}`
      return destinationImages[path]?.default || ''
    },
  },
  methods: {
    selectDestination(name) {
      this.selectedDestination = this.data.destinations.find(dest => dest.name === name)
    },
  },
  created() {
    this.data = jsonData
    this.selectedDestination = jsonData.destinations[0]
  },
}
</script>

<style scoped>
.destination-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: sans-serif;
}

.destination-content {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
}

.destination-image-container {
  flex: 1 1 40%;
  text-align: center;
}

.destination-image {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.destination-info {
  flex: 1 1 50%;
}

.tab-buttons {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.tab-buttons button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #aaa;
}

.tab-buttons button.active {
  color: #000;
  border-bottom: 2px solid #000;
}

.destination-details h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.destination-details p {
  font-size: 1rem;
  line-height: 1.6;
}

.destination-meta {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.destination-meta h5 {
  font-size: 0.8rem;
  color: #888;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}
</style>
