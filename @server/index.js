const data = [
  {
    id: 'green',
    features: {
      featureOne: true,
      featureTwo: true,
      featureThree: false,
    },
  },
  {
    id: 'blue',
    features: {
      featureOne: true,
      featureTwo: true,
      featureThree: true,
      featureFour: true
    },
  },
]


module.exports = () => ({
  feature_flags: data,
})
