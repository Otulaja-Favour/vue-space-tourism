<template>
  <div v-if="data" class="tech-container">
    
    <div class="tech-content">
      <!-- Left: Image -->
      <div class="tech-image-container">
        <img
        :src="selectedTechnology.images.portrait"
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
export default {
  data() {
    return {
      data: null,
      selectedTechnology: null
    }
  },
  methods: {
    selectTechnology(name) {
      this.selectedTechnology = this.data.technology.find(tech => tech.name === name)
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
        this.selectedTechnology = json.technology[0]
      })
      .catch(error => {
        console.error('Fetch error:', error)
      })
  }
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
  /* flex: 1 1 50%; */
  display: flex;
  flex-direction: row;
  width: 50%;
}

.dot-buttons {
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* margin-bottom: 1rem; */
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
