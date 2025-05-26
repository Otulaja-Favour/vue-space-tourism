<template>
  <div v-if="data" class="destination-container">
    <div class="content">
      <!-- Left: Image -->
      <br />
      <div class="image-container">
        <!-- <p>hi</p> -->

        <p id="p">01 Pick your destination</p>
        
        <img
          :src="selectedDestinationImage"
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
            @click="selectDestination(destination)"
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

<script setup>
import { ref, computed, onMounted } from 'vue';

// Reactive state
const data = ref(null);
const selectedDestination = ref(null);

// Dynamic image imports
const images = import.meta.glob('/src/assets/destination/*.{png,webp}', { eager: true });

// Computed property for the selected destination's image
const selectedDestinationImage = computed(() => {
  if (!selectedDestination.value) return '';
  const imagePath = `/src/assets/destination/${selectedDestination.value.images.png}`;
  return images[imagePath]?.default || '';
});

// Method to select a destination
const selectDestination = (destination) => {
  selectedDestination.value = destination;
};

// Fetch data on mount
onMounted(async () => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) throw new Error('Failed to fetch data');
    data.value = await response.json();
    selectedDestination.value = data.value.destinations[0];
  } catch (error) {
    console.error('Fetch error:', error);
  }
});
</script>

<style scoped>
.destination-container {
  width: 100% !important;
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
  display: flex;
  width: 40%;
  flex-direction: column;
  /* border: 10px solid pink; */
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
  /* margin-right: 0.5r; */
  margin: 5px;
  padding: 10px 10px;
  background: none;
  border: 1px solid white !important;
  border-radius: 10px 10px 0px 0px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: white;
  font-size: 12px;
}

.button-group button.active {
  background-color: white;
  color: black;
}

.details h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.5rem;
}

.details p {
  margin: 0.5rem 0;
}
@media screen and (max-width:900px) {
  .image-container{
    width: 100%;
    /* border: 1px solid; */
  }
  .destination-container{
    padding: 6px !important;
  }
  .content{
    padding: 6px ;
    /* border: 1px solid; */
  }
}
</style>