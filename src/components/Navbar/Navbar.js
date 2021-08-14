import React from 'react';

const Navbar = () => {
    return (
        <div class="input-group">
            <div class="form-outline">
                <input id="search-input" type="search" class="form-control" />
                <label class="form-label" for="form1">Search</label>
            </div>
        </div>
    );
};

export default Navbar;