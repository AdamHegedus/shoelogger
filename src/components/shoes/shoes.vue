<template>
    <div class="container">
        <div class="float-right">
            <button class="btn btn-primary" @click="newShoe">
                New
            </button>
        </div>
        <h2>Shoes</h2>

        <transition-group name="list" tag="div" class="row">
            <div
                class="col-12 col-md-6 col-lg-6 px-3 px-lg-2 py-2 transition-item"
                v-for="(item, index) in shoes"
                :key="item.product"
            >
                <div
                    class="card"
                    :class="{selected: isSelected(index)}"
                    @click.stop="selectShoe(index)"
                >
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ item.product }}
                            <br>
                            <small>{{ item.brand }}</small>
                        </h5>
                        <span class="distance-text">
                            Distance:
                            <span class="distance-value">{{ item.distance }}</span>
                            km
                            </span>
                        <span class="timestamp">Last modified: {{ item.timestamp }}</span>

                        <transition name="fade" appear mode="out-in">
                            <button
                                v-show="isSelected(index)"
                                class="btn btn-danger shoe-action"
                                @click.stop="deleteShoe(item.id)"
                            >
                                Delete
                            </button>
                        </transition>
                    </div>
                </div>
                <transition name="animation-slide-bottom-and-fade" appear>
                    <p
                        class="alert alert-danger mt-3"
                        v-if="!meta.status && meta.message !== null && isSelected(index)"
                    >
                        {{ meta.message }}
                    </p>
                </transition>
            </div>
        </transition-group>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    shoes() {
      return this.$store.state.shoes.shoes;
    },
    ...mapGetters({
      meta: "shoes/getMeta"
    })
  },
  created() {
    this.$store.dispatch("shoes/getShoes");
  },
  data() {
    return {
      selectedIndex: null
    };
  },
  methods: {
    newShoe() {
      this.$router.push("shoes/new");
    },
    deleteShoe(brandId) {
      this.$store.dispatch("shoes/deleteShoe", {
        id: brandId
      });
    },
    selectShoe(index) {
      this.selectedIndex = this.isSelected(index) ? null : index;

      if (!this.meta.status) {
        this.$store.dispatch("shoes/resetMeta");
      }
    },
    isSelected(index) {
      return this.selectedIndex === index;
    }
  },
  watch: {
    meta(actual) {
      if (actual.status) {
        this.selectShoe(null);
        this.$store.dispatch("shoes/getShoes");
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/app.scss";

.card {
  transition: background-color 0.5s ease-out, color 0.1s ease-out;
  color: $primary;

  &.selected {
    background-color: lighten($secondary, 15%);
    cursor: pointer;
    color: $white;
    transition: background-color 0.5s ease-out, color 0.1s ease-out;

    .timestamp {
      color: $white;
    }
  }

  .distance-text {
    font-size: 14px;
  }

  .distance-value {
    font-size: 16px;
    font-weight: bold;
  }

  .timestamp {
    color: $secondary;
    font-size: 10px;
    position: absolute;
    bottom: 5px;
    right: 20px;
  }
}

.shoe-action {
  position: absolute;
  top: 10px;
  right: 10px;
}

.transition-item {
  transition: all 0.1s;
}

.list-enter,
.list-leave {
  opacity: 0;
  transform: scale(0.5);
}

.list-leave-active {
  position: absolute;
}

.animation-slide-bottom-and-fade-enter {
  opacity: 0;
}

.animation-slide-bottom-and-fade-enter-active {
  animation: slide-bottom-and-fade 0.5s;
}

.animation-slide-bottom-and-fade-leave-active {
  animation: slide-bottom-and-fade 0.2s reverse;
}

@keyframes slide-bottom-and-fade {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
