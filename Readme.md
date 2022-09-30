# Indian Landmarks API 

### GET Landmarks by

<li>State</li>
<li>City</li>
<li>Locality of City</li>


 ## How to Use
<li>GET Landmark by State --- 
    State/StateName
</li>
<li>GET Landmark by City --- 
    City/CityName
</li>
<li>GET Landmark by Locality --- 
    Locality/LocalityName
</li>
<li>GET Landmark by City/Locality --- 
    City/CityName/Locality/LocalityName
</li>
<li>GET Landmark by Country/ZipCode --- 
    Country/ZipCode
</li>
<li>GET Landmark by Country/State/ZipCode --- 
    Country/State/ZipCode
</li>

### Make a contribution
Submit a Pull Request, with your landmark added to the JSON/index.json file. Make sure the landmark is in this format:
```javascript
{
  "id": last landmark id + 1,
  "state": "",
  "city": "",
  "locality": "",
  "landmark": "",
  "image": "",
  "description": ""
}
```
While sending your pull request please make sure you have also inserted empty JSON with next id this will be helpful to avoid merge conflicts
