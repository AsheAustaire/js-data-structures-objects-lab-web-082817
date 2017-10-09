// Write your solution in this file!

  driver = {'name': 'Sam'};

  function updateDriverWithKeyAndValue(driver, key, value) {
  // without mutating, return a new object clone.
    let newDriver = Object.assign({}, driver);
    newDriver[key] = value;
    return newDriver
  }

  function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    const updatedDriver = driver[key] = value;
    return driver
  }

  function deleteFromDriverByKey(driver, key){
    oldDriver = Object.assign({}, driver)
    delete oldDriver[key]
    return oldDriver
  }

  function destructivelyDeleteFromDriverByKey(driver, key) {
    oldDriver = Object.assign({}, driver)
    newDriver = delete driver[key]
    return newDriver
  }
