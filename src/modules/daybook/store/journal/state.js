export default () =>({
    isLoading:true,
    entries:[
        {
            id:new Date().getTime(),
            date: new Date().toDateString(),
            text:'Lorem ipsum dolor sit amet consectetur adipiscing elit, arcu eros leo nisi ultrices ultricies non taciti, placerat odio maecenas dapibus augue class vitae, euismod curae sociis torquent consequat justo. Dictumst ultrices sociis litora semper ultricies rutrum iaculis aliquet nec accumsan curabitur, potenti interdum dui ridiculus quisque imperdiet laor',
            picture:null
        },
        {
            id:new Date().getTime()+1000,
            date: new Date().toDateString(),
            text:'quisque imperdiet laoreet phasellus velit. Justo tortor potenti molestie morbi magnis metus cras mattis ullamcorper, sapien sociis pretium blandit malesuada ante cubilia euismod, ornare parturient consequat gravida pellentesque integer volutpat dis.',
            picture:null
        },
        {
            id:new Date().getTime()+1000,
            date: new Date().toDateString(),
            text:'Eu mus curae luctus blandit semper velit montes at tempus, turpis elementum egestas netus viverra ornare dictumst non eget nascetur, dis nostra ligula aenean porta dignissim nibh ultricies. Lacus nullam libero fames f',
            picture:null
        }
    ]
})