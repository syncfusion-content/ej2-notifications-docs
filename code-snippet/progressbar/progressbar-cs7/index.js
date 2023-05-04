var linearProgress1 = new ej.progressbar.ProgressBar({
  type: 'Circular',
        value: 60,
        width: '160px',
        height: '160px',
        enableRtl: false,
        trackColor :'#FFD939',
        radius: '100%',
        innerRadius: '80%',
        progressColor: 'white',
        trackThickness: 80,
        cornerRadius: 'Round',
        progressThickness: 10,
        animation: {
            enable: true,
            duration: 2000,
            delay: 0,
        },
  });
  linearProgress1.appendTo('#percentage');

