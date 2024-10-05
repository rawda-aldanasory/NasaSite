const MoreData = () => {
    return (
        <div className='flex flex-col items-center mt-3 mb-10 lg:mt-10' >
            <h1 className="text-4xl mb-2 sm:text-2xl lg:text-1xl text-center tracking-wide bg-gradient-to-r from-purple-400 to-blue-100 text-transparent bg-clip-text">
                You Can Explore More Here
            </h1>
            <div className="w-full h-0 pb-[56.25%] relative"> 
                <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.globalforestwatch.org/embed/map/country/RUS/?mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJjZW50ZXIiOnsibGF0Ijo2NC43NzQxMjUzMTI5MjI1NSwibG5nIjoxMDcuMDUwNzgxMjQ5OTczNDV9LCJjYW5Cb3VuZCI6ZmFsc2UsImRhdGFzZXRzIjpbeyJkYXRhc2V0IjoiZm9yZXN0LWxhbmRzY2FwZS1pbnRlZ3JpdHktaW5kZXgiLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJsYXllcnMiOlsiZm9yZXN0LWxhbmRzY2FwZS1pbnRlZ3JpdHktaW5kZXgtMjAyMSJdfSx7ImRhdGFzZXQiOiJwb2xpdGljYWwtYm91bmRhcmllcyIsImxheWVycyI6WyJkaXNwdXRlZC1wb2xpdGljYWwtYm91bmRhcmllcyIsInBvbGl0aWNhbC1ib3VuZGFyaWVzIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9XX0%3D&mapMenu=eyJtZW51U2VjdGlvbiI6bnVsbCwiZGF0YXNldENhdGVnb3J5IjpudWxsLCJleHBsb3JlVHlwZSI6InBsYWNlc1RvV2F0Y2gifQ%3D%3D&mapPrompts=eyJvcGVuIjp0cnVlLCJzdGVwc0tleSI6InN1YnNjcmliZVRvQXJlYSJ9" 
                    frameborder="0" 
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default MoreData;
