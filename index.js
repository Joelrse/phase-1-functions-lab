function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42
    let distance = pickupLocation - hqLocation
    if (distance < 0) {
        distance = Math.abs(distance)
    }
    return distance
}
distanceFromHqInBlocks(50)

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation)
    const feet = blocks * 264
    return feet
}
distanceFromHqInFeet(50)

function distanceTravelledInFeet(startingBlock, endingBlock) {
    const distance = Math.abs(endingBlock - startingBlock) * 264;
    return distance;
  }
distanceTravelledInFeet(42, 50)

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400) {
        return 0
    } else if(distance <2000) {
            return (distance - 400) *.02
    } else if (distance < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
    
}
calculatesFarePrice(42,50)