state = {
        data: [
          
            {
                label: 'Male',
                color: 'white',
            },
            {
                label: 'Female',
                color: 'white',
            },
            {
                label: 'Transgender',
                color: 'white',
            },
        ],
        data1: [
          
            {
                label: 'Asexual',
                color: 'white',
            },
            {
                label: 'Bisexual',
                color: 'white',
            },
            {
                label: 'Heterosexual',
                color: 'white',
            },
        ],
        data2: [
          
            {
                label: 'Single',
                color: 'white',
            },
            {
                label: 'Engaged',
                color: 'white',
            },
            {
                label: 'Married',
                color: 'white',
            },
        ],
         

    };

<View>
      <Text style={styles.Logintxt}>Gender </Text>
        <View style={{color:"white",justifyContent:"flex-start"}}>
          <RadioGroup
            flexDirection='row' 
            radioButtons={this.state.data} 
            onPress={this.onPress} />
      </View>
    </View>

    <View>
      <Text style={styles.Logintxt}>Sexual Orientation </Text>
        <View style={{marginLeft:"7%",color:"white",justifyContent:'space-between',}}>
          <RadioGroup
            flexDirection='row' 
            radioButtons={this.state.data1} 
            onPress={this.onPress} />
        </View>
    </View> 

    <View>
      <Text style={styles.Logintxt}>Status </Text>
        <View style={{color:"white",justifyContent:'space-between',marginRight:"5%"}}>
          <RadioGroup
            flexDirection='row' 
            radioButtons={this.state.data2} 
            onPress={this.onPress} />
        </View>
    </View> 