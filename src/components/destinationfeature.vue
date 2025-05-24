<template>
  <div v-if="data" class="destination-container">
    
    <div class="content">
      <!-- Left: Image -->
      <br>
      <div class="image-container">
        <!-- <p>hi</p> -->
        
        <h2  id="p">Pick your destination</h2>
<br><br>

        <img
          :src="selectedDestination.images.png"
          :alt="selectedDestination.name"
          class="destination-image"
        />
      </div>

      <!-- Right: Buttons and content -->
      <div class="info">
        <div class="button-group">
          <button
            v-for="destination in data.destinations"
            :key="destination.name"
            @click="selectDestination(destination.name)"
            :class="{ active: destination.name === selectedDestination.name }"
          >
            {{ destination.name }}
          </button>
        </div>

        <div class="details">
          <h3>{{ selectedDestination.name }}</h3>
          <p>{{ selectedDestination.description }}</p>
          <p><strong>Distance:</strong> {{ selectedDestination.distance }}</p>
          <p><strong>Travel Time:</strong> {{ selectedDestination.travel }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-else>Loading...</div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      selectedDestination: null
    }
  },
  methods: {
    selectDestination(name) {
      this.selectedDestination = this.data.destinations.find(dest => dest.name === name)
    }
  },
  mounted() {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        return response.json()
      })
      .then(json => {
        this.data = json
        this.selectedDestination = json.destinations[0] // default to the first one
      })
      .catch(error => {
        console.error('Fetch error:', error)
      })
  }
}
</script>

<style scoped>
.destination-container {
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

.content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

.image-container {
  flex: 1 1 40%;
  text-align: center;
}

.destination-image {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.info {
  flex: 1 1 50%;
}

.button-group {
  margin-bottom: 1rem;
}

.button-group button {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background: #eee;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.button-group button.active {
  background-color: #333;
  color: white;
}

.details h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.5rem;
}

.details p {
  margin: 0.5rem 0;
}
</style>
