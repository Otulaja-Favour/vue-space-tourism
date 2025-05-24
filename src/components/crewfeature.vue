<template>
  <div v-if="data" class="crew-container">
    <h2 class="title">Meet the Crew</h2>

    <div class="crew-content">
      <!-- Left: Image -->
      <div class="crew-image-container">
        <img
          :src="selectedCrew.images.png"
          :alt="selectedCrew.name"
          class="crew-image"
        />
      </div>

      <!-- Right: Buttons + Info -->
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

  <div v-else>Loading...</div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      selectedCrew: null
    }
  },
  methods: {
    selectCrew(name) {
      this.selectedCrew = this.data.crew.find(member => member.name === name)
    }
  },
  mounted() {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch')
        return response.json()
      })
      .then(json => {
        this.data = json
        this.selectedCrew = json.crew[0] // default to first crew member
      })
      .catch(error => {
        console.error('Fetch error:', error)
      })
  }
}
</script>

<style scoped>
.crew-container {
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

.crew-content {
  display: flex;
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
  flex: 1 1 50%;
}

.dot-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.dot-buttons button {
  width: 16px;
  height: 16px;
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
</style>
