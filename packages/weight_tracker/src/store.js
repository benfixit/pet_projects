import { observable, action, computed, decorate } from 'mobx';

class Store {
    weightList = [
        { weight: '78', date: '2019-06-12' },
        { weight: '82', date: '2019-07-15' },
        { weight: '80', date: '2019-09-03' }
    ]

    addWeightData(data) {
        this.weightList.push(data)
    }

    clearWeightData() {
        this.weightList = []
    }

    get maxWeight() {
        const maxWeight = Math.max.apply(null, this.weightList.map(weight => parseInt(weight.weight)));
        return maxWeight;
    }
}

decorate(Store, {
    weightList: observable,
    addWeightData: action,
    clearWeightData: action,
    maxWeight: computed
})

const weightStore = new Store();

export default weightStore