<script>
	import axios from "axios";
	import { onMount } from 'svelte';
    let phoneNumber;
    let timeout;
    let selectedStationId;
	let selectedStationName;

    let stations = [];

	onMount(async () => {
        const response = await fetch('stops.json');
        stations = await response.json();
        console.log(stations[1])

        axios.get('/api/config')
            .then(response => {
                const data = response.data;
				console.log("fetched", data)
                phoneNumber = data.phoneNumber;
                timeout = data.timeout;
                selectedStationId = data.selectedStationId;
				selectedStationName = stations.find(station => station.stop_id == selectedStationId)?.stop_lat;
            })
            .catch(error => {
                console.error('Failed to load settings:', error);
            });
    });

    function updateSelectedStation(event) {
        selectedStationId = stations.find(station => station.stop_lat == event.target.value)?.stop_id;
    }

    function handleSubmit() {
        console.log('Phone Number:', phoneNumber);
        console.log('Timeout:', timeout);
        console.log('Selected Station ID:', selectedStationId);

		const config = {
            phoneNumber: phoneNumber,
            timeout: timeout,
            selectedStationId: selectedStationId
        };

		axios.post('/api/config', config)
            .then(response => {
                console.log('Update successful:', response.data);
                alert('Settings updated successfully!');
            })
            .catch(error => {
                console.error('Error updating settings:', error);
                alert('Failed to update settings.');
            });
    }
</script>

<div class="container text-center">
    <h1>Configure Your Settings</h1>

    <div class="row justify-content-md-center">
        <div class="col col-lg-2">
            <label for="phoneNumberInput">Phone Number</label>
            <input type="tel" class="form-control" id="phoneNumberInput" placeholder="Enter phone number" bind:value={phoneNumber}>
        </div>
        <div class="col col-lg-2">
            <label for="timeoutInput">Timeout (seconds)</label>
            <input type="number" class="form-control" id="timeoutInput" placeholder="Enter timeout" bind:value={timeout}>
        </div>
        <div class="col col-lg-2">
            <label for="stationInput">Station Name</label>
            <input list="stationsList" class="form-control" id="stationInput" on:input={updateSelectedStation} bind:value={selectedStationName}>
            <datalist id="stationsList">
                {#each stations as station}
                    <option value={station.stop_lat}>
                {/each}
            </datalist>
        </div>
        <div class="col-md-auto">
            <button type="button" class="btn btn-primary" on:click={handleSubmit}>Submit Settings</button>
        </div>
    </div>
</div>
